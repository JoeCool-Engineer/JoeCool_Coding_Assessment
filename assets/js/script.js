// Global variables
var main = document.body.children[1];
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var ans = document.createElement("p");
var btn = document.createElement("button")
var timeEl = document.querySelector(".time");

var btn1 = document.createElement('button');
var btn2 = document.createElement('button');
var btn3 = document.createElement('button');
var btn4 = document.createElement('button');

btn.setAttribute("id", "startQuiz");
btn1.setAttribute("id", "sel");
btn2.setAttribute("id", "sel");
btn3.setAttribute("id", "sel");
btn4.setAttribute("id", "sel");
var secondsLeft = 10;

function startPage () {
    h1El.textContent = "Coding Quiz Challenge";
    infoEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    btn.textContent = "Start Quiz";

    btn.addEventListener("click", function(){ init() });

    main.appendChild(h1El);
    main.appendChild(infoEl);
    main.appendChild(btn)
}

startPage()
// accessQuestion()

// Start Quiz/Assessment from button (Init)
function init() {
    setTime();
    disQuestion();
}
// Listen for a click event on toggle switch
// startQuiz.addEventListener("click", init);

// Start Timer (maybe part of Init)
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
    //   console.log(secondsLeft)
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

// Access quesBank from seperate JavaScript
// function accessQuestion() {
//     var questionsEl = ""
//     for (var i = 0; i < questions.length; i++){
//         questionsEl = questions[i].title;
//         console.log(questionsEl);
//     }

// }
// accessQuestion()

function accessChoices() {
    var choicesEl = []
    var questionsEl = ""
    for (var i = 0; i < questions.length; i++) {
        questionsEl = questions[i];
        // console.log(questionsEl);
        for (var j = 0; j < questionsEl.choices.length; j++) {
            choicesEl = questionsEl.choices[j];
            console.log(choicesEl);
        }
    }
}
accessChoices()
// Access questions and multiple choices
function disQuestion () {
// Remove Main Page Content
    main.innerHTML = "";

    // Bank of question 
    var ques1 = "This method repeatedly calls a function or executes a \ncode snippet, with a fixed time delay between each call."
    h1El.textContent = ques1;
    main.appendChild(h1El);

    // Bank of multiple choices
    var choices = ["one", "two", "three", "four"]

    // Appending children
    for (var j = 0; j < choices.length; j++) {
        var pre = eval("btn" + (j + 1))
        pre.textContent = (j+1) + ". " + choices[j];
        main.appendChild(pre);
    }

    btn1.addEventListener("click", function(){ansKey()});
}

// Validate selected answer with actual answer and if wrong penalize 
// Provide the Assessment or weather right or wrong and answer
function ansKey() {
    if (pre.textContext == "one") {
        ans.textContent = "Correct!"
        main.appendChild(ans);
    } else {
        ans.textContent = "Wrong!"
        main.appendChild(ans);
    }
}

// Switch to new Question, provide pause


// When timer reaches zero, collect users initals


// Log to High Scores HTML