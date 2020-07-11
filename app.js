var miliSec = document.getElementById('milisec');
var sec = document.getElementById('second');
var min = document.getElementById('minute');

var miliSecond = 0;
var second = 0;
var minute = 0;

var interval;

function timeStart(){
    miliSecond++
    miliSec.innerHTML = miliSecond;
    if (miliSecond >= 100){
        second++
        sec.innerHTML = second;
        miliSecond = 0;
    } else if (second >= 60){
        minute++
        min.innerHTML = minute;
        second = 0;

        }
    }





function start(){
    interval = setInterval(timeStart,10);

    document.getElementById('startBtn').style.visibility = 'hidden'

}




function stop(){
    clearInterval(interval);

    document.getElementById('startBtn').style.visibility = 'visible'

}

function reset(){
    miliSecond = 00;
    second = 00;
    minute = 00;
    miliSec.innerHTML = miliSecond;
    sec.innerHTML = second;
    min.innerHTML = minute;
    stop()
}

