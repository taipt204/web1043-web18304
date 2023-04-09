const video = document.querySelector(".video");
var isLooping = false;

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function stop() {
  video.currentTime = 0;
  video.pause();
}

function volumeUp() {
  if (video.volume < 1) {
    video.volume += 0.1;
  }
}

function volumeDown() {
  if (video.volume > 0) {
    video.volume -= 0.1;
  }
}

function toggleLoop() {
  isLooping = !isLooping;
  video.loop = isLooping;
}