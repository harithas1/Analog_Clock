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

