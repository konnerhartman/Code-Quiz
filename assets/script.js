// This is the list of questions that will be asked. Inside is 'ask', which is the question as a string, 'choices', which is the multiple answer choices as an array of strings, and 'answer', which is the correct choice as string that is inside the 'choices' array.
var questions = [
    {
        ask: "What is the proper name for: '==' ?",
        choices: ["Strict Equality", "Loose Equality", "Abstract Equality", "Kinda Equality"],
        answer: "Abstract Equality"
    }
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
        // || questionCount === questions.length) {
            clearInterval(timeInterval)
            endEl.classList.remove('hide');
         //   recordScore();
        }
    }, 1000);
};

startBtnEl.addEventListener("click", showQuestion());
function showQuestion() {
    document.querySelector("#ask-question").textContent = questions.ask;
}

function renderScores() {
    scoreBtnEl.addEventListener("click", renderScores());
}