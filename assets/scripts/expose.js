// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn = document.getElementById('horn-select');
  const image = document.querySelector('img');
  
  airhorn.addEventListener('change', function() {
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


}