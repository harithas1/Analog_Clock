document.addEventListener("DOMContentLoaded", function(){
    const hour = document.querySelector(".hour")
    const minute = document.querySelector(".minute")
    const second = document.querySelector(".second")

    function setTime(){
        const now = new Date()
        const hours =  now.getHours()
        const minutes = now.getMinutes()
        const seconds =  now.getSeconds()

        const secondsInDegrees = (seconds/60)*360;
        const minutesInDegrees = (minutes/60)*360;
        const hoursInDegrees = (hours/12)*360;


        second.style.transform = "rotate(" +secondsInDegrees + "deg)"
        minute.style.transform = "rotate(" +minutesInDegrees + "deg)"
        hour.style.transform = "rotate(" +hoursInDegrees + "deg)"
    }
    setInterval(setTime,1000)
    
})


const analogClock = document.querySelector(".analog-clock");
const aHour = document.querySelector(".hour");
const aMinute = document.querySelector(".minute");
const aSecond = document.querySelector(".second");

function setTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  // console.log(hours,minutes,seconds);

  const secondsInDegrees = (seconds / 60) * 360;
  const minutesInDegrees = (minutes / 60) * 360;
  const hoursInDegrees = (hours / 12) * 360;

  aHour.style.transform = `rotate(${hoursInDegrees}deg)`;
  aMinute.style.transform = `rotate(${minutesInDegrees}deg)`;
  aSecond.style.transform = `rotate(${secondsInDegrees}deg)`;

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
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

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

