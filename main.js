// ---------------analog clock

// select the clock hands using their respective classes
const analogClock = document.querySelector(".analog-clock");
const aHour = document.querySelector(".hour");
const aMinute = document.querySelector(".minute");
const aSecond = document.querySelector(".second");

// function to set the time for the analog clock
function setTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const secondsInDegrees = (seconds / 60) * 360;
  //the seconds hand completes one full revolution (360 deg) every 60 sec

  const minutesInDegrees = (minutes / 60) * 360;
  const hoursInDegrees = (hours / 12) * 360; // hours hand completes one full revolution (360 deg) every 12 hours

  // rotate the clock hands using CSS transform
  aSecond.style.transform = "rotate(" + secondsInDegrees + "deg)";
  aMinute.style.transform = "rotate(" + minutesInDegrees + "deg)";
  aHour.style.transform = "rotate(" + hoursInDegrees + "deg)";
  //    12 hour format
}

setInterval(setTime, 1000);






// ---------------digital clock- 12 hour format

const digitalClock = document.querySelector(".digital-clock");
const dHours = document.querySelector(".hours");
const dMinutes = document.querySelector(".minutes");
const dSeconds = document.querySelector(".seconds");
const dDate = document.querySelector(".date");
const amPm = document.querySelector("#am-pm");

function setDigitalTime() {
  const now = new Date(); // get the currrent time
  const hours = now.getHours(); // get the current hours
  const minutes = now.getMinutes(); // get the current minutes
  const seconds = now.getSeconds(); // get the current seconds

  // 12 hour format
  if (hours > 12) {
    if (hours - 12 < 10) {
      dHours.innerText = "0" + (hours - 12);
    }
    amPm.innerText = "PM";
  } else {
    dHours.innerText = hours;
    amPm.innerText = "AM";
  }
  dMinutes.innerText = minutes < 10 ? "0" + minutes : minutes;
  dSeconds.innerText = seconds < 10 ? "0" + seconds : seconds;
  dDate.innerText = now.toLocaleDateString();
}

setInterval(setDigitalTime, 1000);
