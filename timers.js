window.onload = function(){

  /**Variables**/
  let timeElapsed = 1;
  let startButton = document.getElementById('start');
  let resetButton = document.getElementById('reset');
  let pauseButton = document.getElementById('pause');
  let timerText = document.getElementById('timer');
  let isStarted = false;

  /**Functions**/
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

  let resetTimer = () => {
    isStarted = !isStarted;
    window.clearInterval(intervalID);
    timerText.innerHTML = "Stop Watch";
    timeElapsed = 1;
    console.log(timeElapsed);
  };


  let pauseTimer = () => {
    isStarted = !isStarted;
    window.clearInterval(intervalID);
  };

  ///**************Click Events***********///
  startButton.addEventListener('click', startTimer);
  resetButton.addEventListener('click', resetTimer);
  pauseButton.addEventListener('click', pauseTimer);
  ///*************************************///

};
