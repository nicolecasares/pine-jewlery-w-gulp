
var menu = document.querySelector('.menu-toggle');


	var timeoutID;

	function delayedAlert() {
	  timeoutID = window.setTimeout(slowAlert, 2000);
	}

	function slowAlert() {
	  alert('Thanks for visiting');
	}

	function clearAlert() {
	  window.clearTimeout(timeoutID);
	}

document.querySelector('.hamburger').addEventListener('click', function(){


	menu.style.display = 'block';
	menu.style.position = 'fixed';
	menu.style.top = '0';
	menu.style.background = 'white';
	menu.style.width = '100%';
	// window.alert('this is a test');



	delayedAlert();

});




menu.addEventListener('click', function(){
	document.querySelector('.menu-toggle').style.display = 'none';
});

