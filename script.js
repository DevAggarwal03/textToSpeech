const play = document.getElementById('play')
const pause = document.getElementById('pause')
const stop = document.getElementById('stop')

const speedInput = document.getElementById('speed')
const textInput = document.getElementById('text')


play.addEventListener('click', () => {
    playText(textInput.value);
});


function playText(text) {
    if (text.trim() !== '') {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = speedInput.value || 1;
        speechSynthesis.speak(utterance);
    } else {
        console.error('Input text is empty.');
    }
}


pause.addEventListener('click', () => {
    speechSynthesis.pause();
});

stop.addEventListener('click', () => {
    speechSynthesis.cancel();
});



