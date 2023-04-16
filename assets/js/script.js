// Global variables
var main = document.body.children[1].children[0];
var selection = document.body.children[1].children[1];
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var initialsEl = document.createElement("label");
var initialsForm = document.createElement("input");
var initialsSubmit = document.createElement("input");
var hr = document.createElement('hr')
var ans = document.createElement("p");
var btn = document.createElement("button")
var timeEl = document.querySelector(".time");
var btnSelection = document.createElement("section");

var btn1 = document.createElement('button');
var btn2 = document.createElement('button');
var btn3 = document.createElement('button');
var btn4 = document.createElement('button');

btn.setAttribute("id", "startQuiz");
btn1.setAttribute("id", "ans1");
btn2.setAttribute("id", "ans2");
btn3.setAttribute("id", "ans3");
btn4.setAttribute("id", "ans4");
initialsForm.setAttribute('type','text');
initialsSubmit.setAttribute('type', 'submit');

var ansKey1 = document.createElement('span');
var ansKey2 = document.createElement('span');
var ansKey3 = document.createElement('span');
var ansKey4 = document.createElement('span');

var secondsLeft = 72;
var count = 0;

startPage()

function startPage () {
    h1El.textContent = "Coding Quiz Challenge";
    infoEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    btn.textContent = "Start Quiz";

    btn.addEventListener("click", function(){ init() });

    main.appendChild(h1El);
    main.appendChild(infoEl);
    main.appendChild(btn)
}

// Start Quiz/Assessment from button (Init)
function init() {
    setTime();
    disQuestion();
}

// Start Timer (maybe part of Init)
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
    //   console.log(secondsLeft)
      if(count == 5 && secondsLeft > 0) {
        // Stops execution of action at set interval
            clearInterval(timerInterval);
            localStorage.setItem('winTime', secondsLeft)            
      } else if(secondsLeft === 0) {
        clearInterval(timerInterval);
        donePage ()
      }
  
    }, 1000);
  }

// Access questions and multiple choices
function disQuestion () {
// Remove Main Page Content
    main.innerHTML = "";

    // Bank of question 
    var ques = ''
    var num = '';

    ques = questions[count].title; 
    num = questions[count];   
    h1El.textContent = ques;
    main.appendChild(h1El);
    main.appendChild(btnSelection)

    // Set Indexing for each button
    for (var j = 0; j < num.choices.length; j++) {
        var index = j + 1;
        var pre = eval("btn" + index);
        pre.textContent = index + ".  ";
        btnSelection.appendChild(pre);
    }

    // Set labels for buttons
    for (var k = 0; k < num.choices.length; k++) {
        var index = k + 1;
        var btnInput = eval('ansKey' + index);
        btnInput.textContent = num.choices[k];
        btnSelection.children[k].appendChild(btnInput);
        console.log(btnSelection.children[k])
    }
}

// Validate selected answer with actual answer and if wrong penalize 
// Provide the Assessment or weather right or wrong and answer
function validateAns (btnNumber) {
     if (btnNumber === questions[count].choices.indexOf(questions[count].answer)){     
        main.appendChild(hr)
        ans.textContent = 'Correct!'
        main.appendChild(ans)}
      else { 
        secondsLeft = secondsLeft - 15;
        main.appendChild(hr)
        ans.textContent = 'Wrong!'
        main.appendChild(ans) 
        }
    }

// When timer reaches zero, collect users initals
function donePage () {
    main.innerHTML = '';
    h1El.textContent = 'All done!';
    infoEl.textContent = 'Your final score is ' + secondsLeft;
    initialsEl.textContent = 'Enter initials: '
    main.appendChild(h1El);
    main.appendChild(infoEl);
    main.appendChild(initialsEl);
    main.appendChild(initialsForm);
    main.appendChild(initialsSubmit);
}

    btn1.addEventListener("click", function(){ 
        if (count < questions.length-1) {
            var buttonNumber = 0;
            validateAns(buttonNumber);
            setTimeout(function(){
                count++
                disQuestion();}, 1000)
            } else {
                count++
                donePage ()
            }
        })

    btn2.addEventListener("click", function(){
        if (count < questions.length-1) {
            var buttonNumber = 1;
            validateAns(buttonNumber);
            setTimeout(function(){
                count++
                disQuestion();}, 1000)
            } else {
                count++
                donePage ()
            }
    });
    btn3.addEventListener("click", function(){
        if (count < questions.length-1) {
            var buttonNumber = 2;
            validateAns(buttonNumber);
            setTimeout(function(){
                count++
                disQuestion();}, 1000)
            } else {
                count++
                donePage ()
            }
    });
    btn4.addEventListener("click", function(){
        if (count < questions.length-1) {
            var buttonNumber = 3;
            validateAns(buttonNumber);
            setTimeout(function(){
                count++
                disQuestion();}, 1000)
            } else {
                count++
                donePage ()
            }
    });


// Log to High Scores HTML