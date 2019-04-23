document.addEventListener('keydown', playNote);
document.addEventListener('click', playNote);
function playNote(e) {
       let dataKey;
       if (!e.keyCode) {
              dataKey = e.target.getAttribute('data-key')
       } else {
              dataKey = e.keyCode;
              
              style(e);
       }
       const audio = document.querySelector(`audio[data-key = "${dataKey}"]`);
       let key = document.querySelector(`button[data-key = "${dataKey}"]`);
       if (!key) return;
       audio.currentTime = 0;
       audio.play();
       
}

function style(e) {
       const pressedKey = document.querySelector(`button[data-key="${e.keyCode}"]`);
       pressedKey.classList.add('active-key');
       setTimeout(function () { pressedKey.classList.remove('active-key') }, 100);
       
}