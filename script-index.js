/*=======================================================================================*/
/*LOADING PAGE*/

var startBtn = document.getElementById("button")
var loadingPage = document.getElementById("loading");
var welcText = document.getElementById("welcome");
var music = new Audio('birds-fixed.mp3');
var mute = document.getElementById("muteBtn");
var x = document.getElementById("vol");

function fade() {
  loadingPage.style.opacity = "0";
  loadingPage.style.zIndex = "-1";
  welcText.style.opacity = "0";
  welcText.style.zIndex = "-1";
  music.play();
}

startBtn.addEventListener("click", fade);

mute.addEventListener("click", function() {
    if (music.muted==true) {
      music.muted=false;
      x.className = "fa fa-volume-up";
    } else {
      music.muted=true;
      /*x.classList.toggle("fa-volume-off");*/
      x.className = "fa fa-volume-off";
    }
  });

/*function myFunction(x) {
  x.classList.toggle("fa fa-volume-up");
}*/