let startTime , stopTime, duration =0;

const timelaps  = document.getElementById("timelaps");
const display = document.getElementById("timer-text");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const flag = document.getElementById("flag");



//function to start and update the clock
function startTimer(){
            //start the tic
            let hour , remain , min , sec = 0 ;
            console.log("starting the timer......");
            startTime= new Date().getTime();
            timerId=setInterval(()=>{
            let currentTime = new Date().getTime()
            remain =(currentTime - startTime + duration)/1000;
            hour = Math.trunc(remain/3600);
            remain = remain % 3600;
            min = Math.trunc(remain/ 60)
            sec  = Math.trunc(remain % 60) ;
            hour = (String(hour).length<2 )?  "0"+String(hour) : String(hour);
            min = (String(min).length<2 )?  "0"+String(min): String(min);
            sec = (String(sec).length<2 )?  "0"+String(sec) : String(sec);
            display.innerHTML =   `${hour}:${min}:${sec} `  ;
            },1000)





          // change the buttons
          play.style.display = "none";
          pause.style.display = "block" ;
          flag.style.display = "block ";
          reset.style.display= "none";



}




// function to stop the clock
function pauseTimer(){

      // stop the ticking
        stopTime = new Date().getTime();
        console.log("timer has paused .");
        clearInterval(timerId) ;
        duration += stopTime - startTime ;



        //  change the buttons :
        play.style.display = "block";
        pause.style.display = "none" ;
        flag.style.display = "none";
        reset.style.display = "block";

}





function resetTimer(){
    // change the state and null the timer
    display.innerHTML = "00:00:00";
    console.log("time has been stopped and reset");
    timelaps.innerHTML = "";



    // button changes
  play.style.display = "block";
  pause.style.display = "none" ;
  flag.style.display = "none";
  reset.style.display = "none";
}


function flagTimer(){
    const timelaps  = document.getElementById("timelaps");
    const timer = document.getElementById("timer-text").innerHTML;
    timelaps.innerHTML +=   `<span class="laps"><img src="static/flag.png"> ${timer} </span>` ;
}
