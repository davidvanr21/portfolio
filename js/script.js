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




// Copy email to clipboard
// document.getElementById("emailText").addEventListener("click", function() {
//     // Email address to copy to clipboard
//     var email = "davidvanrumpt@gmail.com";
    
//     // Create a temporary textarea element to hold the email address
//     var tempInput = document.createElement("textarea");
//     tempInput.value = email;
//     document.body.appendChild(tempInput);
    
//     // Select and copy the email address
//     tempInput.select();
//     document.execCommand("copy");
    
//     // Remove the temporary textarea
//     document.body.removeChild(tempInput);
    
//     // Alert to notify the user
//     alert("Email copied to clipboard: " + email);
// });






document.addEventListener("DOMContentLoaded", function() {
    var emailText = document.getElementById("emailText");
    var mailCopy = document.getElementById("mail_copy");
    var mailCopied = document.getElementById("mail_copied");

    // Toon mail_copy na hover op emailText
    emailText.addEventListener("mouseover", function() {
        mailCopy.style.visibility = "visible";
    });

    // Verberg mail_copy na het verlaten van emailText
    emailText.addEventListener("mouseout", function() {
        mailCopy.style.visibility = "hidden";
    });

    // Kopieer e-mailadres naar klembord en toon mail_copied na klik op emailText
    emailText.addEventListener("click", function() {
        var email = emailText.textContent.trim();
        navigator.clipboard.writeText(email).then(function() {
            mailCopy.style.visibility = "hidden";
            mailCopy.style.display = "none";

            mailCopied.style.visibility = "visible";
			mailCopied.style.display = "block";
            // Verberg mail_copied na 2 seconden
            setTimeout(function() {
                mailCopied.style.visibility = "hidden";
				mailCopied.style.display = "none";

				mailCopy.style.display = "block";
            }, 2000);
        }).catch(function(error) {
            console.error("Failed to copy: ", error);
        });
    });
});


// Continious sliding text effect (Currently working on element)
// var tickerWrapper = document.querySelector(".tickerwrapper");
// var list = tickerWrapper.querySelector("ul.list");
// var clonedList = list.cloneNode(true);
// var listItems = list.querySelectorAll("li");
// var listWidth = 10;

// // Calculating total width of list
// listItems.forEach(function(item) {
//     listWidth += item.offsetWidth;
// });

// var endPos = tickerWrapper.offsetWidth - listWidth;

// // Setting CSS for original and cloned lists
// list.style.width = listWidth + "px";
// clonedList.classList.add("cloned");
// tickerWrapper.appendChild(clonedList);

// // TimelineMax animation
// var infinite = new TimelineMax({ repeat: -1, paused: true });
// var time = 40;

// infinite
//     .fromTo(list, time, { rotation: 0.01, x: 0 }, { force3D: true, x: -listWidth, ease: Linear.easeNone }, 0)
//     .fromTo(clonedList, time, { rotation: 0.01, x: listWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
//     .set(list, { force3D: true, rotation: 0.01, x: listWidth })
//     .to(clonedList, time, { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone }, time)
//     .to(list, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
//     .progress(1).progress(0)
//     .play();

// // Pause/Play functionality
// tickerWrapper.addEventListener("mouseenter", function() {
//     infinite.pause();
// });

// tickerWrapper.addEventListener("mouseleave", function() {
//     infinite.play();
// });