
var menu = document.querySelector('.menu-toggle');

document.querySelector('.hamburger').addEventListener('click', function(){


	menu.style.display = 'block';
	menu.style.position = 'fixed';
	menu.style.top = '0';
	menu.style.background = 'white';
	menu.style.width = '100%';

});

menu.addEventListener('click', function(){
	document.querySelector('.menu-toggle').style.display = 'none';
});