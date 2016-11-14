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
  $('.menu-trigger').click(function() {
    $('#nav ul').slideToggle(500);
  });//end slide toggle

//When window is resized, the display:none is turned off for the ul so the menu displays on click or touch.
  $(window).resize(function() {
	   if (  $(window).width() > 500 ) {
		$('#nav ul').removeAttr('style');
	 }
	});//end resize
});//end ready
