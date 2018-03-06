



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

	delayedAlert();

document.querySelector('.hamburger').addEventListener('click', function(){


	menu.classList.toggle('active');



});




menu.addEventListener('click', function(){
	menu.classList.toggle('active');
});

