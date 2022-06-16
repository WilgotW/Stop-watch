let interval;

let minutes = 0;
let seconds = 0;
let tenSeconds = 0;



function changeTime(){
    seconds++;
    if(seconds >= 10){
        seconds = 0;
        tenSeconds++;
    }
    if(tenSeconds >= 6){
        tenSeconds = 0;
        minutes++;
    }
    clock.innerHTML = minutes.toString() + ':' + tenSeconds.toString() + seconds.toString();
}

function resetTime(){
    minutes = 0;
    seconds = 0;
    tenSeconds = 0;
    clock.innerHTML = minutes.toString() + ':' + tenSeconds.toString() + seconds.toString();
    beginStopWatch();
}

function beginStopWatch(){
    if(interval == undefined){
        interval = setInterval(changeTime, 1000);
        stopWatch.innerHTML = "End Stop Watch";
    }else{
        clearInterval(interval);
        interval = undefined;
        stopWatch.innerHTML = "Start Stop Watch";
        time = 0;
    }
}

const clock = document.getElementById('clock');
const stopWatch = document.getElementById('stop-watch');
const resetWatch = document.getElementById('reset-watch');

stopWatch.addEventListener('click', beginStopWatch);
resetWatch.addEventListener('click', resetTime);

clock.innerHTML = minutes.toString() + ':' + tenSeconds.toString() + seconds.toString();