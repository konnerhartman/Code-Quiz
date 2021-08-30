// This is the list of questions that will be asked. Inside is 'ask', which is the question as a string, 'choices', which is the multiple answer choices as an array of strings, and 'answer', which is the correct choice as an index.
var questions = [
    {
        ask: "What is the proper name for: '==' ?",
        choices: ["A. Strict Equality", "B. Loose Equality", "C. Abstract Equality", "D. Kinda Equality"],
        answer: 2,
    },
    {
        ask: "What special characters surround an array?",
        choices: ["A. { }", "B. [ ]", "C. ()", "D. ''"],
        answer: 1,
    },
    {
        ask: "In CSS, what does # represent?",
        choices: ["A. id", "B. hashtag", "C. class", "D. value"],
        answer: 0,
    },
    {
        ask: "What is a 'bang' operator?",
        choices: ["A. ||", "B. &&", "C. //", "D. !"],
        answer: 3,
    },
    {
        ask: "What JavaScript command causes a pop-up window on the browser?",
        choices: ["A. alert", "B. prompt", "C. return", "D. NaN"],
        answer: 1,
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
var btnA = document.getElementById("btn-a");
var btnB = document.getElementById("btn-b");
var btnC = document.getElementById("btn-c");
var btnD = document.getElementById("btn-d");
// Variable for the finishing element.
var endEl = document.getElementById("end");
// Variable for the 'results' element.
var resultsEl = document.getElementById("results");
var index = 0;
var points = 0;
// This will allow us to loop through my question array.
var currentQuestion = questions[index];
// Starting seconds on the countdown.
var timeLeft = 120; 
// User input variables
var userInput = document.querySelector("#user-text");
var userForm = document.querySelector("#user-form");
var userList = document.querySelector("#user-list");
var users = [];

// Gives the user an initial time of 120 seconds. 
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

// This function is supposed to take the choice buttons and convert them into an index array.
function getIndexFromId(id) {
    var btnID = ["btnA", "btnB", "btnC", "btnD"];
    return btnID.indexOf(id);
}
// This function is supposed to compare the index from users choice to correct answer.
function checkAnswer(event) {
    var userAnswer = getIndexFromId(event.target.id);
    // If users choice is strictly equal to correct answer, then add a point. 
    if (userAnswer === currentQuestion.answer) {
        score++;
        //If they are not correct, then decrement the time left by 10 seconds.
    } else {
        timeLeft -= 10;
    }
}

// This function shows the next question but comparing the current question the user is on to the index.
function showQuestion() {
    var currentQuestion = questions[index];
    if (index < questions.length) {
        askQuestionEl.textContent = currentQuestion.ask;
        btnA.textContent = currentQuestion.choices[0];
        btnB.textContent = currentQuestion.choices[1];
        btnC.textContent = currentQuestion.choices[2];
        btnD.textContent = currentQuestion.choices[3];
    };
};

// This is called when an answer choice is selected. It calls the 'showQuestion()' function and increments the index, allowing us to move through the array of questions. 
function nextQuestion() {
    if (index < questions.length) {
        index++;
        showQuestion();
    };
    // If the index equals the number of questions, then time goes to 0 and ends game.
    if (index === questions.length) {
        timeLeft = 0;
    }
};

//User Initials
// This function will render (or show) a list of users who have completed the quiz.
function renderUsers() {
    userList.innerHTML = "";
    // This creates a new list item for each new user.
    for (var i = 0; i < users.length; i++) {
        var user = users[i];

        var li =document.createElement("LI");
        li.textContent = user;
        li.setAttribute("data-index", i);

        userList.appendChild(li);
    }
}
// This function will ensure the inputs will remain stored when the page is reloaded.
function init() {
    var storedUsers = JSON.parse(localStorage.getItem("users"));
    // If there are inputs retrieved, then the list will be update.
    if (storedUsers !== null) {
        users = storedUsers;
    }
    renderUsers();
}

// This function allows localStorage to properly read the data and take it in. Converts it to an array.
function storeUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}

// This prevents the page from reloading everytime an input is submitted.
userForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var userText = userInput.value.trim();
    // This if statement prevents any empty submissions. 
    if (userText === "") {
        return;
    }
    // Adds a new user to list and returns text box back to blank.
    users.push(userText);
    userInput.value = "";

    storeUsers();
    renderUsers();
});

init();

// Button event listeners for different functions. 
startBtnEl.addEventListener("click", startClock);
startBtnEl.addEventListener("click", showQuestion);

btnA.addEventListener("click", nextQuestion);
btnB.addEventListener("click", nextQuestion);
btnC.addEventListener("click", nextQuestion);
btnD.addEventListener("click", nextQuestion);

btnA.addEventListener("click", checkAnswer);
btnB.addEventListener("click", checkAnswer);
btnC.addEventListener("click", checkAnswer);
btnD.addEventListener("click", checkAnswer);