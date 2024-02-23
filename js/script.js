console.log('Welcome to the amazing console environment. Dont see any errors, do you? 👀');

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











// Currently working on element
var tickerWrapper = document.querySelector(".tickerwrapper");
var list = tickerWrapper.querySelector("ul.list");
var clonedList = list.cloneNode(true);
var listItems = list.querySelectorAll("li");
var listWidth = 10;

// Calculating total width of list
listItems.forEach(function(item) {
    listWidth += item.offsetWidth;
});

var endPos = tickerWrapper.offsetWidth - listWidth;

// Setting CSS for original and cloned lists
list.style.width = listWidth + "px";
clonedList.classList.add("cloned");
tickerWrapper.appendChild(clonedList);

// TimelineMax animation
var infinite = new TimelineMax({ repeat: -1, paused: true });
var time = 40;

infinite
    .fromTo(list, time, { rotation: 0.01, x: 0 }, { force3D: true, x: -listWidth, ease: Linear.easeNone }, 0)
    .fromTo(clonedList, time, { rotation: 0.01, x: listWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
    .set(list, { force3D: true, rotation: 0.01, x: listWidth })
    .to(clonedList, time, { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone }, time)
    .to(list, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
    .progress(1).progress(0)
    .play();

// Pause/Play functionality
tickerWrapper.addEventListener("mouseenter", function() {
    infinite.pause();
});

tickerWrapper.addEventListener("mouseleave", function() {
    infinite.play();
});