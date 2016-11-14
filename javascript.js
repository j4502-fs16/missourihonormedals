
//desktop main menu
$(document).ready(function() {
  $('.parents-1').click(function() {
    $('.sub-1').slideToggle(500);
  });
  $(window).resize(function() {
       if (  $(window).width() > 600 ) {
        $('.sub1').removeAttr('style');
     }
    });
});

$(document).ready(function() {
  $('.parents-2').click(function() {
    $('.sub-2').slideToggle(500);
  });
  $(window).resize(function() {
       if (  $(window).width() > 600 ) {
        $('.sub1').removeAttr('style');
     }
    });
});

$(document).ready(function() {
  $('.parents-3').click(function() {
    $('.sub-3').slideToggle(500);
  });
  $(window).resize(function() {
       if (  $(window).width() > 600 ) {
        $('.sub1').removeAttr('style');
     }
    });
});
