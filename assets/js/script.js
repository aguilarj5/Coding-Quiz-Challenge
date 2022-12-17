// Selects element by class
var timeEl = document.querySelector("#timer");
var secondsLeft = 60;

var anyAnswer = document.querySelectorAll(".answers").length;
var answersArray = []; 

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";


    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = "time is up";

}

setTime();
//timer settings end here

//question logic start here
for (var i = 0; i < anyAnswer ; i++) {
    answersArray.push(document.querySelectorAll(".answers")[i].value);
    document.querySelectorAll(".answers")[i].addEventListener("click", function() {

        //if(document.querySelectorAll(".answers")[i].document === "correct"){
          //  console.log("correct");
        //}
        console.log("click");
        console.log(answersArray);
        
    });
}

function responseMsg(feedback){

    document.getElementById("response").innerHTML = feedback;

}
