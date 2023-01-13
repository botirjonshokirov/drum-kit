const sounds = [
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/snare.mp3",
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
];
const keys = ["w", "a", "s", "d", "j", "k", "l"];

const button = document.querySelectorAll("button");
for (let k = 0; k < 7; k++) {
  button[k].addEventListener("click", function () {
    for (let i = 1; i <= 7; i++) {
      const audioPlay = new Audio(sounds[k]);
      audioPlay.play();
      button[k].classList.add("pressed");
      setTimeout(function () {
        button[k].classList.remove("pressed");
      }, 100);
    }
  });
}
document.addEventListener("keydown", function (e) {
  for (let i = 0; i < 7; i++) {
    if (e.key === keys[i]) {
      const audioPlay = new Audio(sounds[i]);
      audioPlay.play();
      activeButton(e.key);
    }
  }
});

function activeButton(event) {
  const pressedButton = document.querySelector("." + event);
  pressedButton.classList.add("pressed");
  setTimeout(function () {
    pressedButton.classList.remove("pressed");
  }, 100);
}
