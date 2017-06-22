removeTransition = event => {
  if (event.propertyName == 'transform') {
    event.target.classList.remove('playing');
  }
}

playSound = event => {
  const audio = keySelector("audio", event.keyCode);

  if (audio) {
    changeStyleKey();
    executeAudio(audio);
  }
}

keySelector = (element, keyCode) => {
  return document.querySelector(`${element}[data-key="${keyCode}"]`);
}

changeStyleKey = () => {
  const key = keySelector("div", event.keyCode);
  key.classList.add('playing');
}

executeAudio = audio => {
  audio.currentTime = 0;
  audio.play();
}

(() => {
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);
})()
