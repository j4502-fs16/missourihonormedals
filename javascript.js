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

//hamburger menu


//Loads when the javascript has loaded. when menu-trigger is clicked the function slide toggle occurs. THe 500 is the length of the animation.

$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('.mainnav').slideToggle(500);
  });//end slide toggle

//When window is resized, the display:none is turned off for the ul so the menu displays on click or touch.
  $(window).resize(function() {
	   if (  $(window).width() > 600 ) {
		$('.mainnav').removeAttr('style');
	 }
	});//end resize
});//end ready
