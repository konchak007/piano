


document.addEventListener('keydown', playNote);
document.addEventListener('keyup', style);

function playNote(e) {
       const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
       let key = document.querySelector(`button[data-key="${e.keyCode}"]`);
       key.className=+'active-key';
       if (!key) return;
       audio.currentTime=0;
       audio.play();
}

function style(e) {
       pressedKey = document.querySelector(`button[data-key="${e.keyCode}"]`);
       pressedKey.classList.remove('active-key');
}