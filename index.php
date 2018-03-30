<?php
	namespace Banshee;

	ob_start();
	require("../libraries/core/error.php");
	require("../libraries/core/banshee.php");
	require("../libraries/core/security.php");

	/* Create core objects
	 */
	$_database = new Database\MySQLi_connection(DB_HOSTNAME, DB_DATABASE, DB_USERNAME, DB_PASSWORD);
	$_settings = new Core\settings($_database);
	$_session  = new Core\session($_database, $_settings);
	$_user     = new Core\user($_database, $_settings, $_session);
	$_page     = new Core\page($_database, $_settings, $_user);
	$_view     = new Core\view($_database, $_settings, $_user, $_page);
	if (is_true(MULTILINGUAL)) {
		$_language = new Core\language($_database, $_page, $_view);
	}

	/* Web Analytics
	 */
	if (library_exists("analytics") && ($_user->is_admin == false)) {
		$analytics = new analytics($_database, $_page);
		$analytics->execute();
	}

	/* User switch warning
	 */
	if (isset($_SESSION["user_switch"])) {
		$real_user = $_database->entry("users", $_SESSION["user_switch"]);
		$_view->add_system_warning("User switch active! Switched from '%s' to '%s'.", $real_user["fullname"], $_user->fullname);
	}

	/* Include the model
	 */
	if (file_exists($file = "../models/".$_page->module.".php")) {
		include($file);

		/* Set output type for API modules
		 */
		$model_class = str_replace("/", "_", $_page->module)."_model";
		if (class_exists($model_class)) {
			if (is_subclass_of($model_class, "api_model")) {
				$_view->mode = API_OUTPUT_TYPE;
				$_view->add_layout_data = false;
			}
		}
	}

	/* Add layout data to output XML
	 */
	$_view->open_tag("output");

	if ($_view->add_layout_data) {
		$_view->open_tag("banshee");
		$_view->add_tag("version", BANSHEE_VERSION);
		$_view->close_tag();
		$_view->add_tag("website_url", $_SERVER["SERVER_NAME"]);

		/* Page information
		 */
		$_view->add_tag("page", $_page->page, array(
			"base"     => $_SERVER["HTTP_SCHEME"]."://".$_SERVER["HTTP_HOST"],
			"url"      => $_page->url,
			"module"   => $_page->module,
			"type"     => $_page->type,
			"readonly" => show_boolean($_page->readonly)));

		/* User information
		 */
		if ($_user->logged_in) {
			$params = array("id" => $_user->id, "admin" => show_boolean($_user->is_admin));
			$_view->add_tag("user", $_user->fullname, $params);
		}

		/* Multilingual
		 */
		if ($_language !== null) {
			$_language->to_output();
		}

		/* Unsecured connection
		 */
		if (($_SERVER["HTTPS"] != "on") && ($_SERVER["HTTP_SCHEME"] != "https")) {
			$pages = array(LOGIN_MODULE, "register", "password");
			if (in_array($_page->module, $pages) || (substr($_page->module, 0, 3) == "cms")) {
				$_view->add_system_warning("Warning, the connection you are using is not secure!");
			}
		}

		/* Main menu
		 */
		if (is_true(WEBSITE_ONLINE) || ($_SERVER["REMOTE_ADDR"] == WEBSITE_ONLINE)) {
			if ((substr($_page->url, 0, 4) == "/cms") || ($_view->layout == LAYOUT_CMS)) {
				/* CMS menu
				 */
				if (($_user->logged_in) && ($_page->page != "logout")) {
					$_view->open_tag("menu");
					$_view->record(array("link" => "/", "text" => "Website"), "item");
					$_view->record(array("link" => "/cms", "text" => "CMS"), "item");
					$_view->record(array("link" => "/logout", "text" => "Logout"), "item");
					$_view->close_tag();
				}
			} else if ($_user->logged_in || is_false(HIDE_MENU_FOR_VISITORS)) {
				/* Normal menu
				 */
				$menu = new menu($_database, $_view);
				if (is_true(MENU_PERSONALIZED)) {
					$menu->set_user($_user);
				}
				$menu->to_output();
			}
		}

		/* Add javascripts to output
		 */
		$_view->add_javascript("jquery/jquery.js");
		$_view->add_javascript("banshee/bootstrap.js");

		$_view->open_tag("content", array("mobile" => show_boolean($_view->mobile)));
	}

	/* Include the controller
	 */
	if (file_exists($file = "../controllers/".$_page->module.".php")) {
		include($file);

		$controller_class = str_replace("/", "_", $_page->module)."_controller";
		if (class_exists($controller_class) == false) {
			print "Controller class '".$controller_class."' does not exist.\n";
		} else if (is_subclass_of($controller_class, "Banshee\\controller") == false) {
			print "Controller class '".$controller_class."' does not extend Banshee's controller class.\n";
		} else {
			$_controller = new $controller_class($_database, $_settings, $_user, $_page, $_view, $_language);
			$method = "execute";

			if (is_true(URL_PARAMETERS)) {
				$reflection = new reflectionobject($_controller);
				$param_count = count($reflection->getmethod($method)->getParameters());
				unset($reflection);

				$params = array_pad($_page->parameters, $param_count, null);
				call_user_func_array(array($_controller, $method), $params);
			} else {
				$_controller->$method();
			}
			unset($_controller);

			if ($_view->disabled) {
				print ob_get_clean();
				exit;
			}

			while ($_view->depth > 2) {
				print "System error: controller didn't close an open tag.";
				$_view->close_tag();
			}
		}
	}

	if ($_view->add_layout_data) {
		/* Prepend stylesheets to output
		 */
		$_view->add_css($_page->module.".css", true);
		$_view->add_css("banshee/layout_".$_view->layout.".css", true);
		$_view->add_css("banshee/banshee.css", true);
		$_view->add_css("banshee/bootstrap-theme.css", true);
		$_view->add_css("banshee/bootstrap.css", true);

		$_view->close_tag();
	}

	/* Handle errors
	 */
	if (($errors = ob_get_contents()) != "") {
		$error_handler = new Core\website_error_handler($_view, $_settings, $_user);
		$error_handler->execute($errors);
	}
	ob_clean();

	/* Close output
	 */
	$_view->close_tag();

	/* Output content
	 */
	$view = $_view->generate();
	if ((($last_errors = ob_get_clean()) != "") && ($_page->module != "setup")) {
		$last_errors = "Fatal errors:\n".$last_errors;

		if (is_true(DEBUG_MODE)) {
			header_remove("Content-Encoding");
			header_remove("Content-Length");
			header("Content-Type: text/html");
		}
		throw new \Exception($last_errors);
	} else {
		print $view;
	}
?>
