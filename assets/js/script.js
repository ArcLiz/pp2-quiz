let userPoints = 0;
let now = 0;

// Array with quiz details

let myQuestions = [
    {
        question: 'Incredibly great placeholder question?',
        alts: [
            'Fascinating answer',
            'Correct answer',
            'Crap answer',
            'Just wrong',
        ],
        correct: 'Correct answer',
        hint: "The answer is in the wording.",
        funfact: 'A synonym for correct is "right"',
    },
    {
        question: 'Another cool example question?',
        alts: [
            'Fascinating answer',
            'Wrong answer',
            'Crap answer',
            'Right answer',
        ],
        correct: 'Right answer',
        hint: "Read the alternatives carefully.",
        funfact: 'A synonym for right is "correct"',
    },
];


// Function for the quiz itself

function runQuiz() {
    // hide currently unused html elements
    let showFacts = document.getElementById("area-alternatives");
    showFacts.style.display = '';
    let hideAlts = document.getElementById("funfacts");
    hideAlts.style.display = "none";

    // writing the question
    let questionArea = document.getElementById("questions");
    questionArea.innerHTML = myQuestions[now].question;

    // creating the answer alternatives
    let alternatives = document.getElementById('area-alternatives');

    let qAlts = myQuestions[now].alts;
    for (let i = 0; i < qAlts.length; i++) {

        let newDiv = document.createElement('div');
        newDiv.classList.add('box','alts');
        newDiv.innerHTML = qAlts[i];
        alternatives.appendChild(newDiv);
    }

    // writing current player score
    let playerScore = document.getElementById("player-score");
    playerScore.innerHTML = `You have ${userPoints} out of ${myQuestions.length} total points.`

    // delayed hint for if a user takes too long to answer the question
    function hint() {
        let hints = document.getElementById('hint');
        hints.innerHTML = `Hint: ` + myQuestions[now].hint;
    }
    setTimeout(hint, 10000);
    
    // Searching for user click on alternative
    let choices = document.querySelectorAll("div.alts");

    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener('click', function () {
            choices[i].classList.add("active");

            playerClick();
        });
    }
    clearTimeout(1);
}


// Function to read the results of player choice and move to the next question

function playerClick() {
    let user_answer = document.querySelector("div.active").innerHTML;

    if (user_answer === myQuestions[now].correct) {
        userPoints += 1;
        localStorage.setItem("userPoints", userPoints)
        
        cleanUp();
        correctFact();
    } else {
        cleanUp();
        incorrectFact();
    }
}


// Tidyup and updating for all areas

function cleanUp() {
    let questionClear = document.getElementById("questions");
    questionClear.innerHTML = "";

    let altsClear = document.getElementById("area-alternatives");
    altsClear.innerHTML = "";

    let hintsClear = document.getElementById("hint");
    hintsClear.innerHTML = "";

    let playerScore = document.getElementById("player-score");
    playerScore.innerHTML = `You have ${userPoints} out of ${myQuestions.length} total points.`
}


// Paus between questions if the user answered correctly

function correctFact() {
    let congratulations = document.getElementById("questions");
    congratulations.innerHTML = "Congratulations, you're absolutely right!";

    // hide currently unused html elements
    let showFacts = document.getElementById("funfacts");
    showFacts.style.display = '';
    let hideAlts = document.getElementById("area-alternatives");
    hideAlts.style.display = "none";

    let alternatives = document.getElementById('ff-import');
    alternatives.innerHTML = myQuestions[now].funfact;
    console.log(myQuestions[now].funfact);

    let playerScore = document.getElementById("player-score");
    playerScore.innerHTML = `You have ${userPoints} out of ${myQuestions.length} total points.`;

    setTimeout(cleanUp, 4999);
    now++

    if (now == myQuestions.length){
        setTimeout(quizEnd, 5000)
    } setTimeout(runQuiz, 5000);
}


// Paus between questions if the user answered incorrectly

function incorrectFact() {
    let condoleances = document.getElementById("questions");
    condoleances.innerHTML = "Oh no, it looks like you got this one wrong.";

    // hide currently unused html elements
    let showFacts = document.getElementById("funfacts");
    showFacts.style.display = '';
    let hideAlts = document.getElementById("area-alternatives");
    hideAlts.style.display = "none";

    let alternatives = document.getElementById('ff-import');
    alternatives.innerHTML = myQuestions[now].funfact;
    console.log(myQuestions[now].funfact);

    let playerScore = document.getElementById("player-score");
    playerScore.innerHTML = `You have ${userPoints} out of ${myQuestions.length} total points.`;

    setTimeout(cleanUp, 4999);
    now++

    if (now == myQuestions.length){
        setTimeout(quizEnd, 5000)
    } setTimeout(runQuiz, 5000);
}


// Redirection to the final page

function quizEnd() {
    location.href = "endpage.html"
}