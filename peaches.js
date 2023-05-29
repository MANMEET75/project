
$('#show-more-content').hide();
$(document).ready(function() {
  // Select the card element and set its initial height
  var card = $('.showCardContent');
  card.height('90px');
});

$('#show-more').click(function(){
  $(document).ready(function() {
    // Select the card element and set its final height
    var card = $('.showCardContent');
    card.height('880px');
  });
  $('#show-more-content').show(1);
	$('#show-less').show();
	$('#show-more').hide();
});

$('#show-less').click(function(){
  $(document).ready(function() {
    // Select the card element and set its final height
    var card = $('.showCardContent');
    card.height('90px');
  });
	$('#show-more-content').hide(150);
	$('#show-more').show();
	$(this).hide();
});


var currentVideo = null;

function playVideo(id) {
  var video = document.getElementById(id);
  if (currentVideo != null && currentVideo != video) {
    currentVideo.pause();
  }
  video.play();
  currentVideo = video;
}

function pauseVideo(id) {
  var video = document.getElementById(id);
  video.pause();
}

function setupVideos() {
  for (const video of document.querySelectorAll('video')) {
    video.controls = false
    video.addEventListener('mouseover', () => { video.controls = 'controls' })
    video.addEventListener('mouseout', () => { video.controls = false })
  }
}
window.addEventListener('load', setupVideos, false)






const myVideo1 = document.getElementById('video1');

// pause the video and unmute it by default
// myVideo1.pause();
myVideo1.muted = false;

// when the user hovers over the video, play it without sound
// myVideo1.addEventListener('mouseover', () => {
//   myVideo1.play();
//   myVideo1.muted = false;
// });

// when the user stops hovering over the video, pause it and mute it
// myVideo1.addEventListener('mouseout', () => {
//   myVideo1.pause();
//   myVideo1.currentTime = 0;
//   // myVideo1.muted = true;
// });



const myVideo2 = document.getElementById('video2');

// pause the video and unmute it by default
myVideo2.pause();
myVideo2.muted = false;

// when the user hovers over the video, play it without sound
myVideo2.addEventListener('mouseover', () => {
  myVideo2.play();
  myVideo2.muted = false;
});

// when the user stops hovering over the video, pause it and unmute it
myVideo2.addEventListener('mouseout', () => {
  myVideo2.pause();
  myVideo2.currentTime = 0;
  myVideo2.muted = false;
});
const myVideo3 = document.getElementById('video3');

// pause the video and unmute it by default
myVideo3.pause();
myVideo3.muted = false;

// when the user hovers over the video, play it without sound
myVideo3.addEventListener('mouseover', () => {
  myVideo3.play();
  myVideo3.muted = false;
});

// when the user stops hovering over the video, pause it and unmute it
myVideo3.addEventListener('mouseout', () => {
  myVideo3.pause();
  myVideo3.currentTime = 0;
  myVideo3.muted = false;
});


const myVideo4 = document.getElementById('video4');

// pause the video and unmute it by default
myVideo4.pause();
myVideo4.muted = false;

// when the user hovers over the video, play it without sound
myVideo4.addEventListener('mouseover', () => {
  myVideo4.play();
  myVideo4.muted = false;
});

// when the user stops hovering over the video, pause it and unmute it
myVideo4.addEventListener('mouseout', () => {
  myVideo4.pause();
  myVideo4.currentTime = 0;
  myVideo4.muted = false;
});
const myVideo5 = document.getElementById('video5');

// pause the video and unmute it by default
myVideo5.pause();
myVideo5.muted = false;

// when the user hovers over the video, play it without sound
myVideo5.addEventListener('mouseover', () => {
  myVideo5.play();
  myVideo5.muted = false;
});

// when the user stops hovering over the video, pause it and unmute it
myVideo5.addEventListener('mouseout', () => {
  myVideo5.pause();
  myVideo5.currentTime = 0;
  myVideo5.muted = false;
});
const myVideo6 = document.getElementById('video6');

// pause the video and unmute it by default
myVideo6.pause();
myVideo6.muted = false;

// when the user hovers over the video, play it without sound
myVideo6.addEventListener('mouseover', () => {
  myVideo6.play();
  myVideo6.muted = false;
});

// when the user stops hovering over the video, pause it and unmute it
myVideo6.addEventListener('mouseout', () => {
  myVideo6.pause();
  myVideo6.currentTime = 0;
  myVideo6.muted = false;
});

const myVideo7 = document.getElementById('video7');

// pause the video and unmute it by default
myVideo7.pause();
myVideo7.muted = false;

// when the user hovers over the video, play it without sound
myVideo7.addEventListener('mouseover', () => {
  myVideo7.play();
  myVideo7.muted = false;
});

// when the user stops hovering over the video, pause it and unmute it
myVideo7.addEventListener('mouseout', () => {
  myVideo7.pause();
  myVideo7.currentTime = 0;
  myVideo7.muted = false;
});




// adding the javaScript for side navbar

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "240px";
  document.getElementById("main").style.marginLeft = "240px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}






function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}




var sideNav = document.querySelector('.sidebar-nav');

var state = "expanded";
//Check if navbar is expanded or minimized and handle 
$('#navbar-toggle').click(function() {
    if (state == "expanded") {
        $('.sidebar').css('margin-left', '-220px');
        state = "minimized";
    } else {
        if (state == "minimized") {
            $('.sidebar').css('margin-left', '0px');
            state = "expanded";

        }
    }
})



const video1 = document.getElementById("video1");
video1.addEventListener("click", () => {
  if (!video1.paused) {
    video1.pause();
  }
});





function expand(card) {
	card.classList.toggle("profile--expanded");

	// If card is not expanded after toggle, add 'unexpanded' class
	if (!card.classList.contains("profile--expanded"))
		card.classList.toggle("profile--unexpanded");
	// Else if card is expanded after toggle and still contains 'unexpanded' class, remove 'unexpanded'
	else if (
		card.classList.contains("profile--expanded") &&
		card.classList.contains("profile--unexpanded")
	)
		card.classList.toggle("profile--unexpanded");
}

function toggleTheme() {
	let docu = document.querySelector("html");

	docu.classList.toggle("light-theme");
	docu.classList.toggle("dark-theme");
}
