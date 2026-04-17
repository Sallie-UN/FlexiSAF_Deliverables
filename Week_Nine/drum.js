const drumPads = document.querySelectorAll(".drum-pad");
const playButton = document.getElementById("play-sequence");

// Sound files
const sounds = {
  kick1: new Audio("sounds/kick1.wav"),
  kick2: new Audio("sounds/kick2.wav"),
  snare: new Audio("sounds/snare.wav"),
  clap: new Audio("sounds/clap.wav"),
  hihat1: new Audio("sounds/hihat1.wav"),
  hihat2: new Audio("sounds/hihat2.wav"),
  tom1: new Audio("sounds/tom1.wav"),
  tom2: new Audio("sounds/tom2.wav"),
  cowbell: new Audio("sounds/cowbell.wav"),
};

// Play sound when button is clicked
drumPads.forEach(function (pad) {
  pad.addEventListener("click", function () {
    const soundName = pad.getAttribute("data-sound");
    playSound(soundName);
  });
});

// Function to play sound
function playSound(name) {
  if (sounds[name]) {
    sounds[name].currentTime = 0;
    sounds[name].play();
  }
}

// Play demo sequence
if (playButton) {
  playButton.addEventListener("click", function () {
    const sequence = ["kick1", "snare", "kick2", "clap", "hihat1", "cowbell"];

    sequence.forEach((sound, index) => {
      setTimeout(() => {
        playSound(sound);
      }, index * 400);
    });
  });
}
