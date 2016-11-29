window.onload = function(){

  let timeElapsed = 1;
  let startButton = document.getElementById('start');
  let resetButton = document.getElementById('reset');
  let pauseButton = document.getElementById('pause');
  let timerText = document.getElementById('timer');
  let isStarted = false;


  let startTimer = () => {
    if (!isStarted){
      isStarted = !isStarted;
      intervalID = window.setInterval(function(){
        timerText.innerHTML = "Time elapsed: " + timeElapsed;
        console.log(timeElapsed);
        timeElapsed++;
      }, 1000);
    }
  };

  startButton.addEventListener('click', startTimer);


  //When "Reset" is clicked, the text should return to "Stop Watch"
  let resetTimer = () => {
    isStarted = !isStarted;
    window.clearInterval(intervalID);
    timerText.innerHTML = "Stop Watch";
    timeElapsed = 1;
    console.log(timeElapsed);
  };

  resetButton.addEventListener('click', resetTimer);
    //grab the reset button and set to variable
    // set text from "time elapsed" to "stop Watch"
    //clear interval


  //When "Pause" is clicked, the text should
  let pauseTimer = () => {
    isStarted = !isStarted;
    window.clearInterval(intervalID);
  };

  pauseButton.addEventListener('click', pauseTimer);
  //say "Time elapsed: 1", but stop incrementing.
    //clear interval






};
