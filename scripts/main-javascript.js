var screenHeight = screen.height;

var html_tag = document.querySelector('html');
var header_tag = document.querySelector('.header');
var body_tag = document.querySelector('body');
var gridBody_tag = document.querySelector('div.gridBody');

html_tag.style.height = screenHeight + "px";
html_tag.style.width = screen.width + "px";
 
body_tag.style.height = screenHeight + "px";
body_tag.style.height = screen.width + "px";

gridBody_tag.style.height = screenHeight + "px";
gridBody_tag.style.height = screen.width + "px";
gridBody_tag.style.marginTop = window.getComputedStyle(header_tag).getPropertyValue("height");

$('.header-menu').on('click', function(e) {
	$('.menCover').show();
	$('.menu').animate({width: "50vw"});
});

$('#menCover, #menExit').on('click', function(e) {
	if(e.target.id == "menCover" || e.target.id == "menExit") {
		setTimeout(function () { $('.menCover').hide()}, 700);
		$('.menu').animate({ width: "0vw" });
	}
})