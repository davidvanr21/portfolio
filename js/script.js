console.log('watcha lookin in ma console?! 👀');

const video = document.getElementById('brandstovShowreel');

function playPauseVideo() {
	if(!video.paused) {
		video.pause()
	} else {
		video.play()
	}
};

const jaar = new Date().getFullYear();
document.getElementById('jaar').innerHTML = jaar;