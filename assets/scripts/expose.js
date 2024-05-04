// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const airhorn = document.getElementById('horn-select');
  const image = document.querySelector('img');
  image.src = ('assets/images/no-image.png');

  airhorn.addEventListener('change', function() {

    if(airhorn.value == 'select'){
      image.src =('assets/images/no-image.png');

    }
    else if(airhorn.value == 'air-horn'){
    image.src =('assets/images/air-horn.svg');
    } 
    else if(airhorn.value == 'car-horn'){
      image.src =('assets/images/car-horn.svg');

    }
    else if (airhorn.value == 'party-horn'){
      image.src =('assets/images/party-horn.svg');

    }
    else {
      image.src =('assets/images/no-image.png');
    }
    // code to run when the event is triggered
  });


}