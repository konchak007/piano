document.addEventListener('keydown', playNote,style);
document.addEventListener('click', playNote, style);
function playNote(e) {
       const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
       let key = document.querySelector(`button[data-key="${e.keyCode}"]`);
       if (!key) return;
       audio.currentTime=0;
       audio.play();
}
function style(e) {   
       pressedKey = document.querySelector(`button[data-key="${e.keyCode}"]`);
       pressedKey.classList.remove('active-key');
}