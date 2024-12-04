const display = document.getElementById("timerdisplay");
const message = document.getElementById("message");
const startBttn = document.getElementById("start");
const stopBttn = document.getElementById("stop");
const resetBttn = document.getElementById("reset");
let countdownTime = 10; 
let remainingTime = countdownTime;
let intervalId = null;
function updateDisplay() {
    display.textContent = `Remaining time: ${remainingTime}s`;
}

startBttn.addEventListener("click", () => {
    if (intervalId !== null) return;
  
    updateDisplay();
  
    intervalId = setInterval(() => {
      remainingTime--;
      updateDisplay();
  
      if (remainingTime <= 0) {
        clearInterval(intervalId);
        intervalId = null;
        message.textContent = "Time’s up!";
      }
    }, 1000);
});

stopBttn.addEventListener("click", () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
      message.textContent = `Timer stopped at ${remainingTime} seconds`;
    }
});
  
resetBttn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    remainingTime = countdownTime;
    updateDisplay();
    message.textContent = "Timer has been reset.";
});  


startBttn.style.borderRadius="100%";
startBttn.style.backgroundColor= "green";
startBttn.style.width="50px"
startBttn.style.height="50px"

stopBttn.style.borderRadius="100%";
stopBttn.style.backgroundColor= "red";
stopBttn.style.width="50px"
stopBttn.style.height="50px"

resetBttn.style.borderRadius="100%";
resetBttn.style.backgroundColor= "lightblue";
resetBttn.style.width="50px"
resetBttn.style.height="50px"
