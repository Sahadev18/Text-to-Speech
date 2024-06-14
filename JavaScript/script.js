const toggleMenu = document.getElementsByClassName("toggle-button")[0]
const navLinks = document.getElementsByClassName("nav-links")[0]

toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})



// Initialize new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

// Set Speech Language
speech.lang = "en";

let voices = []; // global array of available voices

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();

  // Initially set the First Voice in the Array.
  speech.voice = voices[0];

  // Set the Voice Select List. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
  let voiceSelect = document.querySelector("#select");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

document.querySelector("#rat").addEventListener("input", () => {
  // Get rate Value from the input
  const rate = document.querySelector("#rat").value;

  // Set rate property of the SpeechSynthesisUtterance instance
  speech.rate = rate;

  // Update the rate label
  document.querySelector("#rate-label").innerHTML = rate;
});

document.querySelector("#vol").addEventListener("input", () => {
  // Get volume Value from the input
  const volume = document.querySelector("#vol").value;

  // Set volume property of the SpeechSynthesisUtterance instance
  speech.volume = volume;

  // Update the volume label
  document.querySelector("#volume-label").innerHTML = volume;
});

document.querySelector("#pit").addEventListener("input", () => {
  // Get pitch Value from the input
  const pitch = document.querySelector("#pit").value;

  // Set pitch property of the SpeechSynthesisUtterance instance
  speech.pitch = pitch;

  // Update the pitch label
  document.querySelector("#pitch-label").innerHTML = pitch;
});

document.querySelector("#select").addEventListener("change", () => {
  // On Voice change, use the value of the select menu (which is the index of the voice in the global voice array)
  speech.voice = voices[document.querySelector("#select").value];
});

document.querySelector("#speak").addEventListener("click", () => {
  // Set the text property with the value of the textarea
  speech.text = document.querySelector("textarea").value;

  // Start Speaking
  window.speechSynthesis.speak(speech);
});

document.querySelector("#pause").addEventListener("click", () => {
  // Pause the speechSynthesis instance
  window.speechSynthesis.pause();
});

document.querySelector("#resume").addEventListener("click", () => {
  // Resume the paused speechSynthesis instance
  window.speechSynthesis.resume();
});

document.querySelector("#cancel").addEventListener("click", () => {
  // Cancel the speechSynthesis instance
  window.speechSynthesis.cancel();
});

const Clear = document.getElementById("txtclear")
Clear.addEventListener('click', () => {
  document.querySelector("textarea").value = ""
})