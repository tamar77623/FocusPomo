let time = document.getElementById('time');
let start = document.getElementById('start');
let span = document.getElementById('span')
let pause = document.getElementById('pause')
let rest = document.getElementById('rest')
let minuteInterval;
let secondInterval;
let x = Number(time.innerText)
let brea = 10;
start.onclick = function(){
    start.style.display = 'none';
    pause.style.display = 'block'
    Timecalculation();
}
function Timecalculation(){
    minuteInterval =setInterval(() => {
       x-=1;
        console.log(x)
        time.innerText = x;
    }, 60000);
    secondInterval = setInterval(() => {
        let y  = Number(span.innerText)
        y-=1;
        span.innerText = y;
        if(y === 0){
            span.innerText = 59;
        }
    }, 1000);
    if(minuteInterval === 0 && secondInterval === 0){
        rest.style.display = 'block'
    }
}
pause.onclick = function(){
    clearInterval(minuteInterval);
    clearInterval(secondInterval)
    start.style.display = 'block';
    pause.style.display = 'none';
}
rest.onclick = function(){
    location.reload();
}