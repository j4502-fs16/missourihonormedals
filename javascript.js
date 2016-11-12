$(document).ready(function)(){
  $('.menu-trigger').click(function(){
    $('.nav').slideToggle(500);
  });

$(window).resize(fuction(){
    if ( $(window).width() > 700 ){
      $('.nav').removeAttr('style');
    }
});
});
