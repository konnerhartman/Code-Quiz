// This is the list of questions that will be asked. Inside is 'ask', which is the question as a string, 'choices', which is the multiple answer choices as an array of strings, and 'answer', which is the correct choice as string that is inside the 'choices' array.
var questions = [
    {
        ask: "What is the proper name for: '==' ?",
        choices: ["A. Strict Equality", "B. Loose Equality", "C. Abstract Equality", "D. Kinda Equality"],
        answer: "(C) Abstract Equality"
    },
    {
        ask: "What special characters surround an array?",
        choices: ["A. { }", "B. [ ]", "C. ()", "D. ''"],
        answer: "B. [ ]"
    },
    {
        ask: "In CSS, what does # represent?",
        choices: ["A. id", "B. hashtag", "C. class", "D. value"],
        answer: "A. id"
    },
    {
        ask: "What is a 'bang' operator?",
        choices: ["A. ||", "B. &&", "C. //", "D. !"],
        answer: "D. !"
    },
    {
        ask: "What JavaScript command causes a pop-up window on the browser?",
        choices: ["A. alert", "B. prompt", "C. return", "D. NaN"],
        answer: "B. prompt"
    },
    
];

// Variable for the 'start' button.
var startBtnEl = document.getElementById("start-btn");
// Variable for the 'score' button.
var scoreBtnEl = document.getElementById("score-btn");
// Variable for the div containing buttons, timer, questions, and answers.
var questionBodyEl = document.getElementById("question-body");
// Variable for the timer.
var clockEl = document.getElementById("clock");
// Variable for the questions.
var askQuestionEl = document.getElementById("ask-question");
// Variable for the multiple answer choices.
var choicesEl = document.getElementById("choices");
var btnA = document.getElementById("btn-a");
var btnB = document.getElementById("btn-b");
var btnC = document.getElementById("btn-c");
var btnD = document.getElementById("btn-d");
// Variable for the finishing element.
var endEl = document.getElementById("end");
// Variable for the 'results' element.
var resultsEl = document.getElementById("results");

// When clicking on the 'start' button, this will start the clock.
startBtnEl.addEventListener("click", startClock)

// Gives the user an initial time of 120 seconds. 
var timeLeft = 120; 
function startClock() {
    startBtnEl.classList.add('hide');
    questionBodyEl.classList.remove('hide');
    var timeInterval = setInterval(function() {
        // Decrements the clock by a second. 
        timeLeft--;
        // Changes HTML "Time: 0" to "Time Remaining: " and adds countdown.
        clockEl.textContent = "Time Remaining: " + timeLeft;
        // When countdown reaches 0, it will stop counting instead of going negative.
        if (timeLeft <= 0) {
            clearInterval(timeInterval)
            endEl.classList.remove('hide');
            questionBodyEl.classList.add('hide');
        };
    }, 1000);
};

var index = 0;
var currentQuestion = questions[index];
startBtnEl.addEventListener("click", showQuestion);

function showQuestion() {
    if (index < questions.length) {
        askQuestionEl.textContent = currentQuestion.ask;
        btnA.textContent = currentQuestion.choices[0];
        btnB.textContent = currentQuestion.choices[1];
        btnC.textContent = currentQuestion.choices[2];
        btnD.textContent = currentQuestion.choices[3];
    };
};

choices.addEventListener("click", nextQuestion);

function nextQuestion() {
    if (index < questions.length) {
        index++;
        showQuestion();
    };
};

scoreBtnEl.addEventListener("click", showResults);

function showResults() {
    resultsEl.classList.remove('hide');
};