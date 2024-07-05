function enableAutoplay() {
    document.getElementById('splash-screen').style.display = 'none';
    var audio = document.getElementById('myAudio');
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('Audio is playing.');
        }).catch(error => {
            console.log('Failed to play audio:', error);
        });
    }
}
