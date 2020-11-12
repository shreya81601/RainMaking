var sounds = [
  "audio/Hands2.wav",
  "audio/Rice.wav",
  "audio/lightning.wav",
  "audio/rain_dist2.wav",
  "audio/whistle.wav",
  "audio/fook.wav",
  "audio/murmure.wav",
  "audio/pouring.wav"
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
    btn.innerHTML = "Wind Noise";
    btn.style.fontFamily= "Overlock"; 
  } 
  else if(i==1){
    btn.innerHTML = "Heavy Rain Drops";
    btn.style.fontFamily= "Overlock"; 
  }
  else if(i==2){
    btn.innerHTML = "Thunder";
    btn.style.fontFamily= "Overlock"; 
  }
  else if(i==3){
    btn.innerHTML = "Rain in Distance";
    btn.style.fontFamily= "Overlock"; 
  }
  else if(i==4){
    btn.innerHTML = "Light Wind Noise";
    btn.style.fontFamily= "Overlock"; 
  }
  else if(i==5){
    btn.innerHTML = "Strong Wind";
    btn.style.fontFamily= "Overlock"; 
  }
  else if(i==6){
    btn.innerHTML = "Rain Murmur";
    btn.style.fontFamily= "Overlock"; 
  }
  else if(i==7){
    btn.innerHTML = "Rain creek";
    btn.style.fontFamily= "Overlock"; 
  }
 

  document.getElementById("div1").appendChild(btn);

  btn.addEventListener("click", function() {
    if (Rain_player.paused) {
      Rain_player.play();
      Rain_player.loop=true;
      btn.className = "active";
            if (btn.innerHTML=="Wind Noise")
              { 
                timeout = setTimeout(function() {
                btn.innerHTML = "Rub hands";
                }, 4000);
              }
            else if (btn.innerHTML=="Heavy Rain Drops")
              { 
                timeout = setTimeout(function() {
                btn.innerHTML = "Drop rice on metal";
                }, 4000);
              }
            else if (btn.innerHTML=="Thunder")
              { 
                timeout = setTimeout(function() {
                btn.innerHTML = "Real thunder!";
                }, 4000);
              }
            else if (btn.innerHTML=="Rain in Distance")
              { 
                timeout = setTimeout(function() {
                btn.innerHTML = "Computer fan";
                }, 4000);
              }
            else if (btn.innerHTML=="Light Wind Noise")
              { 
                timeout = setTimeout(function() {
                btn.innerHTML = "Whistle";
                }, 4000);
              }
            else if (btn.innerHTML=="Strong Wind")
              { 
                timeout = setTimeout(function() {
                btn.innerHTML = "Blow into mic";
                }, 4000);
              }
            else if (btn.innerHTML=="Rain Murmur")
              { 
                timeout = setTimeout(function() {
                btn.innerHTML = "Shake rice";
                }, 4000);
              }
            else if (btn.innerHTML=="Rain creek")
              { 
                timeout = setTimeout(function() {
                btn.innerHTML = "Pour water";
                }, 4000);
              }
    } else {
      Rain_player.pause();
      btn.className = "";
    }
  });

  // btn.addEventListener("click", function(){
  //   if (btn.value=="Medium Rain") elem.value = "Hands rubbing";
    
  // }









}
