var sounds = [
  "audio/hands.mp3",
  "audio/Rice.wav",
  "audio/lightning.mp3",
  "audio/rain_dist2.mp3",
  "audio/whistle.mp3",
  "audio/thunder.mp3",
  "audio/murmure.mp3",
  "audio/creek.mp3"

];


for (var i = 0; i < sounds.length; i++) {
  // create an audio player just for this file
  
  const Rain_player = document.createElement("audio");
  Rain_player.loop = true;
  Rain_player.src = sounds[i];
  
  document.getElementById("div1").appendChild(Rain_player);

  // create a button to trigger the sounds
  const btn = document.createElement("button");
  if (i==0){
    btn.innerHTML = "Medium Rain";
  } 
  else if(i==1){
    btn.innerHTML = "Heavy Rain Drops";
  }
  else if(i==2){
    btn.innerHTML = "Lightning";
  }
  else if(i==3){
    btn.innerHTML = "Rain in Distance";
  }
  else if(i==4){
    btn.innerHTML = "Light Wind Noise";
  }
  else if(i==5){
    btn.innerHTML = "Thunder";
  }
  else if(i==6){
    btn.innerHTML = "Rain Murmur";
  }
  else if(i==7){
    btn.innerHTML = "Rain creek";
  }
 

  document.getElementById("div1").appendChild(btn);

  btn.addEventListener("click", function() {
    if (Rain_player.paused) {
      Rain_player.play();
      Rain_player.loop=true;
      btn.className = "active";
    } else {
      Rain_player.pause();
      btn.className = "";
    }
  });
}