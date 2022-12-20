//variable initializations
var timeEl = document.querySelector("#timer");
var secondsLeft = 60;

var anyAnswer = document.querySelectorAll(".answers").length;
var qlimit = document.querySelectorAll('.questions').length;
//console.log(qlimit);
var btnArray = [];
var answersArray = []; 
var questionCount = 0;
var startBtn = document.getElementById('btnStart');
var userScore = 0;

//sets timer in motion
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till quiz is over.";

    if(secondsLeft === 0 || secondsLeft < 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function
      sendMessage();
      handleQuizEnd();
    }

  }, 1000);
};

  // Function to create and set time is up message
function sendMessage() {
  timeEl.textContent = "time is up";
};
//timer settings end here

//event to handle start button functionality
startBtn.addEventListener('click', function(){
  questionCount = questionCount + 1;
  //
  console.log(questionCount);
  setTime();
  document.getElementById('startPage').style.visibility = 'hidden';
  document.getElementById('question' + questionCount).style.visibility = "visible";
});
//end startBtn instructions

//populates array with answer key
for (var i = 0; i < anyAnswer; i++) {
    answersArray.push(document.querySelectorAll(".answers")[i].value);
};

//populates array of buttons to match the answers to
for (var i = 0; i < anyAnswer; i++){
  btnArray.push(document.querySelectorAll(".answers")[i]);
};  

//eventlistener for all buttons on the page and evalutes wether its value is correct or not and calls the function accordingly
for(var i = 0; i < anyAnswer; i++){
      document.querySelectorAll(".answers")[i].addEventListener("click", function() {
        if (this.value === 'correct') {
          handleCorrect();
        } else handleIncorrect();
      });
};

//start handle events for answer value
function handleCorrect() {
  handleQuizEnd();
  userScore = 20 + userScore;
  responseMsg('Correct!');
  //will hide previous question and show next question
  document.getElementById('question' + questionCount).style.visibility = 'hidden';

  questionCount = questionCount + 1;

  document.getElementById('question' + questionCount).style.visibility = "visible";
};

function handleIncorrect() {
  handleQuizEnd();
  //console.log("do incorrect steps");
  userScore = -20 + userScore;
  secondsLeft = -10 + secondsLeft;
  responseMsg('Incorrect!');

  //will hide previous question ans how next question
  document.getElementById('question' + questionCount).style.visibility = 'hidden';

  questionCount = questionCount + 1; //keeps track of question number

  document.getElementById('question' + questionCount).style.visibility = "visible";
};
//end handlers for answers


function responseMsg(feedback){
  document.getElementById("response").innerHTML = feedback;
};

function scoreForm() {
  document.getElementById("score").style.visibility = "visible";
};

function handleQuizEnd() {
  if((questionCount > qlimit) || (secondsLeft === 0)) {
    clearInterval(timerInterval);
    sendMessage();
    scoreForm();
  } else return;
};