function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
} 
$("#topNav").on("click", function() {
  if (inputVal.value.length > 0) {
$(window).load(function() {
  }
});
$(document).ready(function () {
//Smooth scrolling when click to nav
$('#topNav > li > a').click(function (e) { e.preventDefault();
var curLink = $(this);
var scrollPoint = $(curLink.attr('href')).position().top;
$('body,html').animate({
scrollTop: scrollPoint
}, 1000); })
$(window).scroll(function () {
            onScrollHandle();
});
function onScrollHandle() {     
//Get current scroll position
var currentScrollPos = $(document).scrollTop();
//Iterate through all node
$('#topNav > li > a').each(function () {
var curLink = $(this);
var refElem = $(curLink.attr('href'));
//Compare the value of current position and the every section position in each scroll
if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
//Remove class active in all nav
$('#nav > li').removeClass("current");
                    //Add class active
curLink.parent().addClass("current");
}
else {
curLink.parent().removeClass("current"); } });
        }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= ($("#menu").innerHeight() + 100)) {
        $(".topNav").addClass("change");
    } else {
        $(".topNav").removeClass("change");
    }
});
//Loading 
$(".main").css({"visibility":"visible"});
$(".main").animate({"opacity":"1"});  
$(".night-tabs").css({"visibility":"visible"});
$(".night-tabs").delay(300).animate({"opacity":"1"});
$(".night-tabs").css({"visibility":"visible"});
$(".night-tabs").delay(600).animate({"opacity":"1"});
$("#footer").css({"visibility":"visible"});
$("#footer").delay(900).animate({"opacity":"1"});

$(document).ready(function(){
  $('#title').focus();
    $('nav').autosize();
});
(function($) {
    "use strict";
$('body').scrollspy({
        target: '.nav',
        offset: 60
    });
$('ul').affix({
        offset: {
            top: 200
    }
});
new WOW().init();
$('a.page-scroll').bind('click', function(event) {var $ele = $(this);
$('html, body').stop().animate({
scrollTop: ($($ele.attr('href')).offset().top - 60)
}, 1450, 'easeInOutExpo');
event.preventDefault();
});
$('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
$('.navbar-toggle:visible').click();
});

$('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
});
})(jQuery);
var meny = Meny.create({ menuElement: document.querySelector( '.menu' ),
contentsElement: document.querySelector( '.container' ),
				position: 'top',
				height: 50
});
/*******************
	 ANIMATION BUTTONS
	*******************/
$(".btns").hover(function () {
$(this).delay(10).queue(function(){
$(this).addClass('active').clearQueue();
});
}, function () { $(this).removeClass('active');
});
$('.widget li').click(function(){ 
$('.widget li').removeClass('active');
$(this).addClass('active');
var i = $(this).index();
var classNumber = i+1;
$('.body').removeClass('demo1 demo2 demo3 demo4 html').addClass('demo'+classNumber);
$('.body').delay(10).queue(function(){
$(this).addClass('html').clearQueue();
	});		
});



