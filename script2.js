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

/*function displayTime() {
  document.getElementById("audio_time").innerHTML = convert(player.currentTime) + " / " + convert(player.duration);
}*/

document.getElementById("audio_time").innerHTML = convert(player.currentTime) + " / " + convert(player.duration);

player.ontimeupdate = function() {timeRemaining()};

function timeRemaining() {
  document.getElementById("audio_time").innerHTML = convert(player.currentTime) + " / " + convert(player.duration);
}

function convert(x) {

    var duration = x; //song is object of audio.  song= new Audio();

    var sec= new Number();
    var min= new Number();
    sec = Math.floor( duration );    
    min = Math.floor( sec / 60 );
    min = min >= 10 ? min : '0' + min;    
    sec = Math.floor( sec % 60 );
    sec = sec >= 10 ? sec : '0' + sec;

    return min + ":" + sec;
    /*$("#total_duration").html(min + ":"+ sec);*/   //Id where i have to print the total duration of song.

}
  