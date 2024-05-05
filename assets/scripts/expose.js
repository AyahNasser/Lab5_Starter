// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn = document.getElementById('horn-select');
  const image = document.querySelector('img');
  
  horn.addEventListener('change', function() {
    if(horn.value == 'select'){
      image.src =('assets/images/no-image.png');
      
    }
    else if(horn.value == 'air-horn'){
    image.src =('assets/images/air-horn.svg');
    } 
    else if(horn.value == 'car-horn'){
      image.src =('assets/images/car-horn.svg');
    }
    else if (horn.value == 'party-horn'){
      image.src =('assets/images/party-horn.svg');
    }
    
    // code to run when the event is triggered
  });


  const audio = document.querySelector('button');
  var audio1 = new Audio('assets/audio/air-horn.mp3');
  var audio2 = new Audio('assets/audio/car-horn.mp3');
  var audio3 = new Audio('assets/audio/party-horn.mp3');

  audio.addEventListener('click', function(){


    if(horn.value == 'air-horn'){
      audio1.play();
      
    }
    else if(horn.value == 'car-horn'){
      audio2.play();
    }
    else if (horn.value == 'party-horn'){
      audio3.play();
      const jsConfetti = new JSConfetti();
      console.log(jsConfetti);
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        confettiRadius: 6,
        confettiNumber: 500,
     })
    }
  });


  let volume = document.getElementById('volume');
  let volumelevel = document.getElementById('volume-controls').querySelector('img');
  
  volume.addEventListener('change', function(){

    if(volume.value == 0){
      volumelevel.src = ('assets/icons/volume-level-0.svg');
    }
    else if(volume.value < 33 ){
      volumelevel.src = ('assets/icons/volume-level-1.svg');
    }
    else if( volume.value < 67 ){
      volumelevel.src = ('assets/icons/volume-level-2.svg');

    }
    else if( volume.value > 67 ){
      volumelevel.src = ('assets/icons/volume-level-3.svg');

    }
    audio1.volume = audio2.volume = audio3.volume = volume.value/100;
  });






  


}