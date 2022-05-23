console.log('hello');

const video = document.getElementById('brandstovShowreel');

function playPauseVideo() {
	if(!video.paused) {
		video.pause()
	} else {
		video.play()
	}
}