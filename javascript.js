function showsub(li){
 var submenu=li.getElementsByTagName("ul")[0];
 submenu.style.display="block";
}
function hidesub(li){
 var submenu=li.getElementsByTagName("ul")[0];
 submenu.style.display="none";
}</span>


//Loads when the javascript has loaded. when menu-trigger is clicked the function slide toggle occurs. THe 500 is the length of the animation.

$(document).ready(function() {
  $('parents').click(function() {
    $('sub').slideToggle(500);
  });//end slide toggle

//When window is resized, the display:none is turned off for the ul so the menu displays on click or touch.
  $(window).resize(function() {
	   if (  $(window).width() > 600 ) {
		$('sub').removeAttr('style');
	 }
	});//end resize
});//end ready
