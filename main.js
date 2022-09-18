let [hr,min,sec,millisec] = [0,0,0,0];
let timer = document.querySelector('.mainTime');
let int = null;

document.getElementById('start').addEventListener('click', ()=>{
    if(int!==null){
    clearInterval(int);
    }      
    int = setInterval(mainTime,10);
    });
document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(int);
    });
document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    [hr,min,sec,millisec] = [0,0,0,0];
    timer.innerHTML = '00 : 00 : 00 : 00';
    });

function mainTime(){
    millisec+=1;
    if(millisec == 100){
        millisec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
            if(min == 60){
                min = 0;
                hr++;
                if(hr ==60){
                    hr=0;
                }
            }
        }
    }
    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = millisec < 10 ? "00" + millisec : millisec < 100 ? "0" + millisec : millisec;
    timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}