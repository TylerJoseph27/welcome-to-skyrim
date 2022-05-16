// get audio elements
const sounds = document.querySelectorAll('audio');

// play audio element
const playSound = ({target}) => {
  target.querySelector('audio').play();
};

// pause audio element
const pauseSound = ({target}) => {
  target.querySelector('audio').pause();
};

// add focus and blur events to parent element of every audio element
sounds.forEach(sound => {
  sound.parentElement.addEventListener('focus', playSound);
  sound.parentElement.addEventListener('blur', pauseSound);
})