$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var counter = 1;

var portfolioCounter = 1;

function portfolioAdvance(){
  if (portfolioCounter == 1){
    $('.portfolioPages').removeClass('portfolioPagesPosition2 portfolioPagesPosition3 portfolioPagesPosition4 portfolioPagesPosition5 portfolioPagesPosition6 portfolioPagesPosition7 portfolioPagesPosition8 portfolioPagesPosition9 portfolioPagesPosition10');
    $('.portfolioPages').addClass('portfolioPagesPosition1');
    
    $('.portfolioNavDot02').removeClass('portfolioNavDot02-active')
    $('.portfolioNavDot03').removeClass('portfolioNavDot03-active')
    $('.portfolioNavDot04').removeClass('portfolioNavDot04-active')
    $('.portfolioNavDot05').removeClass('portfolioNavDot05-active')
    $('.portfolioNavDot06').removeClass('portfolioNavDot06-active')
    $('.portfolioNavDot07').removeClass('portfolioNavDot07-active')
    $('.portfolioNavDot08').removeClass('portfolioNavDot08-active')
    $('.portfolioNavDot09').removeClass('portfolioNavDot09-active')
    $('.portfolioNavDot10').removeClass('portfolioNavDot10-active')
    
    
    $('.portfolioNavDot01').addClass('portfolioNavDot01-active');}
  
  
  else if (portfolioCounter == 2){
    $('.portfolioPages').removeClass('portfolioPagesPosition1 portfolioPagesPosition3 portfolioPagesPosition4 portfolioPagesPosition5 portfolioPagesPosition6 portfolioPagesPosition7 portfolioPagesPosition8 portfolioPagesPosition9 portfolioPagesPosition10');
    $('.portfolioPages').addClass('portfolioPagesPosition2');
  
    $('.portfolioNavDot01').removeClass('portfolioNavDot01-active')
    $('.portfolioNavDot03').removeClass('portfolioNavDot03-active')
    $('.portfolioNavDot04').removeClass('portfolioNavDot04-active')
    $('.portfolioNavDot05').removeClass('portfolioNavDot05-active')
    $('.portfolioNavDot06').removeClass('portfolioNavDot06-active')
    $('.portfolioNavDot07').removeClass('portfolioNavDot07-active')
    $('.portfolioNavDot08').removeClass('portfolioNavDot08-active')
    $('.portfolioNavDot09').removeClass('portfolioNavDot09-active')
    $('.portfolioNavDot10').removeClass('portfolioNavDot10-active')
    
    
    $('.portfolioNavDot02').addClass('portfolioNavDot02-active');}
  
  else if (portfolioCounter == 3){
    $('.portfolioPages').removeClass('portfolioPagesPosition1 portfolioPagesPosition2 portfolioPagesPosition4 portfolioPagesPosition5 portfolioPagesPosition6 portfolioPagesPosition7 portfolioPagesPosition8 portfolioPagesPosition9 portfolioPagesPosition10');
    $('.portfolioPages').addClass('portfolioPagesPosition3');
  
    $('.portfolioNavDot01').removeClass('portfolioNavDot01-active')
    $('.portfolioNavDot02').removeClass('portfolioNavDot02-active')
    $('.portfolioNavDot04').removeClass('portfolioNavDot04-active')
    $('.portfolioNavDot05').removeClass('portfolioNavDot05-active')
    $('.portfolioNavDot06').removeClass('portfolioNavDot06-active')
    $('.portfolioNavDot07').removeClass('portfolioNavDot07-active')
    $('.portfolioNavDot08').removeClass('portfolioNavDot08-active')
    $('.portfolioNavDot09').removeClass('portfolioNavDot09-active')
    $('.portfolioNavDot10').removeClass('portfolioNavDot10-active')
    
    
    $('.portfolioNavDot03').addClass('portfolioNavDot03-active');}
  
  else if (portfolioCounter == 4){
    $('.portfolioPages').removeClass('portfolioPagesPosition1 portfolioPagesPosition2 portfolioPagesPosition3 portfolioPagesPosition5 portfolioPagesPosition6 portfolioPagesPosition7 portfolioPagesPosition8 portfolioPagesPosition9 portfolioPagesPosition10');
    $('.portfolioPages').addClass('portfolioPagesPosition4');
  
    $('.portfolioNavDot01').removeClass('portfolioNavDot01-active')
    $('.portfolioNavDot02').removeClass('portfolioNavDot02-active')
    $('.portfolioNavDot03').removeClass('portfolioNavDot03-active')
    $('.portfolioNavDot05').removeClass('portfolioNavDot05-active')
    $('.portfolioNavDot06').removeClass('portfolioNavDot06-active')
    $('.portfolioNavDot07').removeClass('portfolioNavDot07-active')
    $('.portfolioNavDot08').removeClass('portfolioNavDot08-active')
    $('.portfolioNavDot09').removeClass('portfolioNavDot09-active')
    $('.portfolioNavDot10').removeClass('portfolioNavDot10-active')
    
    
    $('.portfolioNavDot04').addClass('portfolioNavDot04-active');}

 
};

function advance(){
  if (counter == 1){
    $('.slides').removeClass('slidePosition2 slidePosition3 slidePosition4');
    $('.slides').addClass('slidePosition1');
    
    $('.contentSlides').removeClass('contentSlidesPosition2 contentSlidesPosition3 contentSlidesPosition4');
    $('.contentSlides').addClass('contentSlidesPosition1');
    
    $('.picturetest').removeClass('picturePosition2 picturePosition3 picturePosition4');
    $('.picturetest').addClass('picturePosition1');
    
    $('.navIcon2Image').removeClass('navIcon2Image-active');
    $('.navIcon3Image').removeClass('navIcon3Image-active');
    $('.navIcon4Image').removeClass('navIcon4Image-active');
    $('.navIcon1Image').addClass('navIcon1Image-active');
    
    $('.portfolioNavGrid').removeClass('portfolioNavGrid-active');
  }
  
  else if (counter == 2){
    $('.slides').removeClass('slidePosition1');
    $('.slides').removeClass('slidePosition3');
    $('.slides').removeClass('slidePosition4');
    $('.slides').addClass('slidePosition2');
    $('.contentSlides').removeClass('contentSlidesPosition1');
    $('.contentSlides').removeClass('contentSlidesPosition3');
    $('.contentSlides').removeClass('contentSlidesPosition4');
    $('.contentSlides').addClass('contentSlidesPosition2');
    $('.picturetest').removeClass('picturePosition1');
    $('.picturetest').removeClass('picturePosition3');
    $('.picturetest').removeClass('picturePosition4');
    $('.picturetest').addClass('picturePosition2');
    $('.navIcon1Image').removeClass('navIcon1Image-active');
    $('.navIcon3Image').removeClass('navIcon3Image-active');
    $('.navIcon4Image').removeClass('navIcon4Image-active');
    $('.navIcon2Image').addClass('navIcon2Image-active');
    $('.portfolioNavGrid').addClass('portfolioNavGrid-active');
  }
  else if (counter == 3){
    $('.slides').removeClass('slidePosition1');
    $('.slides').removeClass('slidePosition2');
    $('.slides').removeClass('slidePosition4');
    $('.slides').addClass('slidePosition3');
    $('.contentSlides').removeClass('contentSlidesPosition1');
    $('.contentSlides').removeClass('contentSlidesPosition2');
    $('.contentSlides').removeClass('contentSlidesPosition4');
    $('.contentSlides').addClass('contentSlidesPosition3');
    $('.picturetest').removeClass('picturePosition1');
    $('.picturetest').removeClass('picturePosition2');
    $('.picturetest').removeClass('picturePosition4');
    $('.picturetest').addClass('picturePosition3');
    $('.navIcon1Image').removeClass('navIcon1Image-active');
    $('.navIcon2Image').removeClass('navIcon2Image-active');
    $('.navIcon4Image').removeClass('navIcon4Image-active');
    $('.navIcon3Image').addClass('navIcon3Image-active');
    $('.portfolioNavGrid').removeClass('portfolioNavGrid-active');
  }
  else if (counter == 4 ){
    $('.slides').removeClass('slidePosition1');
    $('.slides').removeClass('slidePosition2');
    $('.slides').removeClass('slidePosition3');
    $('.slides').addClass('slidePosition4');
    $('.contentSlides').removeClass('contentSlidesPosition1');
    $('.contentSlides').removeClass('contentSlidesPosition2');
    $('.contentSlides').removeClass('contentSlidesPosition3');
    $('.contentSlides').addClass('contentSlidesPosition4');
    $('.picturetest').removeClass('picturePosition1');
    $('.picturetest').removeClass('picturePosition2');
    $('.picturetest').removeClass('picturePosition3');
    $('.picturetest').addClass('picturePosition4');
    $('.navIcon1Image').removeClass('navIcon1Image-active');
    $('.navIcon2Image').removeClass('navIcon2Image-active');
    $('.navIcon3Image').removeClass('navIcon3Image-active');
    $('.navIcon4Image').addClass('navIcon4Image-active');
    $('.portfolioNavGrid').removeClass('portfolioNavGrid-active');
  }
}

$( document ).ready()
  $('.navIcon1Image').addClass('navIcon1Image-active');
  $('.portfolioNavDot01').addClass('portfolioNavDot01-active');



$('.portfolioNavLeftArrow').click(function() {
  if (portfolioCounter > 1) {
    portfolioCounter = portfolioCounter-1;
    portfolioAdvance();
  }
});

$('.portfolioNavRightArrow').click(function() {
  if (portfolioCounter < 4) {
    portfolioCounter = portfolioCounter+1;
    portfolioAdvance();
  }
});

$('.navIcon1Image').click(function() {
  counter = 1
  advance();
});

$('.navIcon2Image').click(function() {
  counter = 2
  advance();
});

$('.navIcon3Image').click(function() {
  counter = 3
  advance();
});

$('.navIcon4Image').click(function() {
  counter = 4
  advance();
});

$('.buttonViewWork').click(function() {
  counter = 2;
  advance();});

$('.portfolioNavDot01').click(function() {
  portfolioCounter = 1
  portfolioAdvance();
});

$('.portfolioNavDot02').click(function() {
  portfolioCounter = 2
  portfolioAdvance();
});

$('.portfolioNavDot03').click(function() {
  portfolioCounter = 3
  portfolioAdvance();
});

$('.portfolioNavDot04').click(function() {
  portfolioCounter = 4
  portfolioAdvance();
});

