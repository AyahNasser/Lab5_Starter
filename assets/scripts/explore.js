// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // TODO


  const synth = window.speechSynthesis;
  const speak = document.querySelector("button");
  const inputTxt = document.getElementById("text-to-speak");
  const voiceSelect = document.querySelector("select");
  const image = document.querySelector("img");
 

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speak.addEventListener("click", (event) =>{
    event.preventDefault();

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        image.src = "assets/images/smiling-open.png"        


      }
    }
    
    utterThis.onstart = (event) => {image.src = "assets/images/smiling-open.png"};
    utterThis.onend = (event) => {image.src = "assets/images/smiling.png"};
    
    


   
    
    

    synth.speak(utterThis);
    inputTxt.blur();


  })


}