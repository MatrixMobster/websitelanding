var scene = document.getElementById('scene')
var parallax = new Parallax(scene);

var scene2 = document.getElementById('scene2')
var parallax = new Parallax(scene2);

$('.clickable').click(function() {
  $('.c1').toggleClass('c1-active');
  $('.c2').toggleClass('c2-active');
  $('.c3').toggleClass('c3-active');
  $('.c4').toggleClass('c4-active');
  $('.i1').toggleClass('i1-active');
  $('.i2').toggleClass('i2-active');
  $('.i3').toggleClass('i3-active');
  $('.i4').toggleClass('i4-active');
  $('.ibackground').toggleClass('ibackground-active');
  $('.minimize').toggleClass('minimize-active');
});

$('.bubble-hoverer').mouseover(function() {
  $('.bubble').toggleClass('bubble-active');
});

$('.bubble-hoverer').mouseout(function() {
  $('.bubble').toggleClass('bubble-active');
});

 $(".smooth-scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 500,'swing');
     });


(function() {
  
  var documentElem = $(document),
      i1 = $('i1-active'),
      lastScrollTop = 0;
  
  documentElem.on('scroll', function() {
    var currentScrollTop = $(this).scrollTop();
    
    if (currentScrollTop > lastScrollTop ) 
      $('.c1').removeClass('c1-active');
      $('.c2').removeClass('c2-active');
      $('.c3').removeClass('c3-active');
      $('.c4').removeClass('c4-active');
      $('.i1').removeClass('i1-active');
      $('.i2').removeClass('i2-active');
      $('.i3').removeClass('i3-active');
      $('.i4').removeClass('i4-active');
      $('.ibackground').removeClass('ibackground-active');
      $('.minimize').removeClass('minimize-active');
    
    
  });
      
})();

