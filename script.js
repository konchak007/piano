document.addEventListener('keydown', playNote);
document.addEventListener('keydown', style);
document.addEventListener('click', playNote);
document.addEventListener('click', style);

function playNote(e) {
       let dataKey;
       if (!e.keyCode) {
              dataKey = e.target.getAttribute('data-key')
       } else {
              dataKey = e.keyCode
       }
       if (!dataKey) return;
       const audio = document.querySelector(`audio[data-key = "${dataKey}"]`);
       let key = document.querySelector(`button[data-key = "${dataKey}"]`);
       if (!key) return;
       audio.currentTime = 0;
       audio.play();
      
}

function style(e) {
       const pressedKey = document.querySelector(`button[data-key="${e.keyCode}"]`);
       pressedKey.classList.add('active-key');
}