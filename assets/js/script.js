// Variables to hold score and index, and to select the countdown, main game and start classes
var timeLeft = 60;
var timeInterval = "";
var timerEl = document.getElementById("countdown");
var gameEl = document.getElementById("game");
var startBtn = document.getElementById("start");
var timeOver = "Time is up";
var penalty = "5";
var createOption = document.createElement("ul");
var score = 0;
var questionIndex = 0;


var questions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<scripting>","<js>","<javascript>","<script>"],
    answer: "<script>"
  },
  {
    title: "The external JavaScript file must contain the <script> tag.",
    choices: ["True", "False"],
    answer: "False"
  },
  {
    title: "How would you call a function named myFunction?",
    choices: ["myFunction()", "call function myFunction()", "call myFunction()"],
    answer: "C"
  },
  {
    title: "How does a while loop start?",
    choices: ["while (i<= 10)", "while (i <=10; i++", "while i=1 to 10"],
    answer: "while (i<= 10)"
  },
  {
    title: "JavaScript is really fun",
    choices: ["True", "True"],
    answer: "True"
  }
]; 

    startBtn.addEventListener("click", function() {
        countdown();
        startQuiz(questionIndex);
    });

    // Function to hold the questions and index
  function startQuiz(questionIndex) {
    createOption.innerHTML = "";
    gameEl.innerHTML = "";
        
    // for loop for questions and question arrays
    for (var i = 0; i < questions.length; i++) {
      var questionTitle = questions[questionIndex].title;
      var questionOptions = questions[questionIndex].choices;
      gameEl.textContent= questionTitle;
    };
      questionOptions.forEach(function (newButton) {
          var optionList = document.createElement("button");
          optionList.textContent = newButton;
          optionList.setAttribute("id", "choices");
          gameEl.appendChild(createOption);
          createOption.appendChild(optionList);
          optionList.addEventListener("click", (correctAnswer));
      })
  };

  function correctAnswer(event) {
    var element = event.target;
    console.log(element);

    if (element.matches("button")) {
      var createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");

      if (element.textContent == questions[questionIndex].answer) {
          score ++;
          alert("That's the correct answer! " + questions[questionIndex].answer);
      } else {
          timeLeft = timeLeft - penalty;
          alert("Incorrect. The right answer is: " + questions[questionIndex].answer);
      };
    };

    questionIndex ++;
    if (questionIndex >= questions.length) {
      quizDone();
      createDiv.textContent = "Your score is: " + score;    
    } else {
      startQuiz(questionIndex);                    
      }
      gameEl.appendChild(createDiv);
  };


  function quizDone() {
    gameEl.innerHTML = "";
    stopCountdown();

    var h1El = document.createElement("h1");
    h1El.setAttribute("id", "h1El");
    h1El.textContent = "All done"
    gameEl.appendChild(h1El);

    var pEl = document.createElement("p");
    pEl.setAttribute("id", "pEl");
    gameEl.appendChild(pEl);


    if (timeLeft >= 0) {
      var timeRemaining = timeLeft;
      var pEl2 = document.createElement("p");
      pEl2.textContent = "Your final score with time included is: " + timeRemaining;
      gameEl.appendChild(pEl2);
    };

        
      var createLabel = document.createElement("label");
      createLabel.setAttribute("id", "createLabel");
      createLabel.textContent = "Initials: ";
      gameEl.appendChild(createLabel);


      var createInput = document.createElement("input");
      createInput.setAttribute("type", "text");
      createInput.setAttribute("id", "initials");
      createInput.textContent = "";
      gameEl.appendChild(createInput);

      var createSubmit = document.createElement("button");
      createSubmit.setAttribute("type", "submit");
      createSubmit.setAttribute("id", "Submit");
      createSubmit.textContent = "Submit";
      gameEl.appendChild(createSubmit);



      createSubmit.addEventListener("click", function () {

        var initials = createInput.value;
        if (!initials) {
          alert("Initials: ")        
        } else {
          var finalScore = {
            initials: initials,
            score: timeRemaining
          }
          console.log(finalScore);
          }
      });   
  };

  function countdown() {          
    timeInterval = setInterval(function() {
    if(timeLeft >= 1) {
      timerEl.textContent = "Time left:  " + timeLeft;
      timeLeft -= 1;
    }; 
  function displayMessage() {
    alert(timeOver);
  };
    }, 1000)
};


  function stopCountdown() {
    clearInterval(timeInterval);
    timerEl.textContent = "You're out of time, sorry!"
    console.log(timeInterval);
  };
