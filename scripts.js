// /*progress bar*/
// window.onscroll = function() {myScroll()};
// function myScroll(){
// 	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   	var scrolled = (winScroll / height) * 100;
//   	document.getElementById("Progbar").style.width = scrolled + "%";


function openNav() {
  		document.getElementById("mySidenav").style.width = "250px";
  		document.getElementById("main").style.marginLeft = "250px";
  		// document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	}

	function closeNav() {
  		document.getElementById("mySidenav").style.width = "0";
  		document.getElementById("main").style.marginLeft = "0";
  		// document.body.style.backgroundColor = "white";
	}