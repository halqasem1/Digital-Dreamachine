let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let controls = document.querySelector("#controls");
let background = document.body;
let flashBackground = document.querySelector("#flashBackground");
let newInterval;
let agree = document.querySelector("#agree");
let disagree = document.querySelector("#disagree");
let about = document.querySelector("#about");
let apply = document.querySelector("#apply");
let color = document.querySelector("#color");
let flash = document.querySelector(".flash");
let speedSlider = document.querySelector("#speedSlider");
let customization = document.querySelector("#customization");

// 8 - 13 flickers per second / 125 is the original milisecond amount

// Apply timer to flash

let speedValue = 125;

function setSpeed(e) {
    speedValue = e.target.value;
    clearInterval(newInterval);
    screenFlash();
    stopFlash();
    console.log(speedValue);
}

speedSlider.addEventListener("input", setSpeed, false);


// Remove previous interval and reset interval

if (newInterval) {
    clearInterval(newInterval);
    screenFlash();
}


// Basic functionality and buttons

function screenFlash() {
    if (!newInterval) {
        console.log(speedValue);
        newInterval = setInterval(flashScreen, speedValue);
    }
}


function flashScreen() {
    if (flashBackground.classList.contains("hide")) {
        flashBackground.classList.remove("hide");
    }
    else {
        flashBackground.classList.add("hide");
    }
}

function stopFlash() {
    clearInterval(newInterval);
    newInterval = null;
}

startButton.addEventListener("click", screenFlash);
stopButton.addEventListener("click", stopFlash);

// Spacebar functionality

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        startButton.blur();
      stopFlash();
    }
  }

// Permission pop-up

function closePermission() {
    about.classList.add("hide");
}

agree.addEventListener("click", closePermission);


// Apply color picker to flash

color.addEventListener("input", changeColor, false);

function changeColor(e) {
    flashBackground.style.background = e.target.value;
}

// Provides text box if browser doesn't support color picker

color.select();
