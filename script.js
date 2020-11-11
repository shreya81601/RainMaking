/*=======================================================================================*/
/*NAV BAR*/

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "18%";
  /*document.getElementById("main").style.marginLeft = "250px";*/
  document.getElementById("nav_button").style.opacity = "0";
  document.getElementById("main").style.opacity = "0.9";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  /*document.getElementById("main").style.marginLeft = "0";*/
  document.getElementById("nav_button").style.opacity = "1";
  document.getElementById("main").style.opacity = "1";
}


/*=======================================================================================*/
/*AUDIO BUTTONS*/

var player = document.getElementById("player");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");

//add event listeners for each event
playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);

//make functions for what happens with each event

function playAudio() {
	player.play();
}

function pauseAudio() {
	player.pause();
}

function stopAudio() {
	player.currentTime = 0;
	player.pause();
}


// SLIDER
var audioInfo = document.getElementById("audioInfo");
var slider = document.getElementById("myRange");
  // var audio = document.getElementById("audio");

  slider.addEventListener("input", changeVolume);
  audioInfo.innerHTML = slider.value;

  function changeVolume() {
    audioInfo.innerHTML = slider.value;
    player.volume = slider.value/100;
  }

  