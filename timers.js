window.onload = function(){

  let timeElapsed = 0;
  let startButton = document.getElementById('start');
  let resetButton = document.getElementById('reset');
  let pauseButton = document.getElementById('pause');
  let timerText = document.getElementById('timer');


  let startTimer = () => {

    let intervalID = window.setInterval(function(){
      timerText.innerHTML = "Time elapsed: " + timeElapsed;
      console.log(timeElapsed);
      timeElapsed++;
    }, 1000);
  };

  startButton.addEventListener('click', startTimer);


  //When "Reset" is clicked, the text should return to "Stop Watch"

    //grab the reset button and set to variable
    // set text from "time elapsed" to "stop Watch"
    //clear interval


  //When "Pause" is clicked, the text should
  //say "Time elapsed: 1", but stop incrementing.
    //clear interval






};
