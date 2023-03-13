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

        let front = document.createElement('div');
        front.classList.add('front');
        front.innerHTML = qAlts[i];
        let back = document.createElement('div');
        back.classList.add('back');
        back.innerHTML = qAlts[i];
        newDiv.appendChild(front);
        newDiv.appendChild(back);

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
    let choices = document.querySelectorAll("div.back");

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


//Function to calculate users final result and print appropriate text on final page

function userGrade() {
    let userString = localStorage.getItem("userPoints")
    let userScore = parseInt(userString) || 0;

    let showSum = document.getElementById('final-score');
    let showGrade = document.getElementById('grade');
    let showResult = document.getElementById('final-result');

    console.log(userScore)

    showSum.innerHTML = `Your final score was ${userScore} out of ${myQuestions.length} points.`

    if (userScore >= 0.9 * myQuestions.length) {
        showGrade.innerHTML = "A";
        showResult.innerHTML = "Wow, you really know me like the back of your hand! I'm starting to wonder if you're secretly a mind reader or if we've been friends in a past life. Your score is so high, it's like you've been stalking me on Instagram for months. Keep up the good work, you're definitely one of my closest confidants!"
    } else if (userScore >= 0.7 * myQuestions.length) {
        showGrade.innerHTML = "B";
        showResult.innerHTML = "Great job, you definitely know a thing or two about me! Your score is like a glimpse into my personality, but there's still some mystery left to unravel. It's like we're starting to become friends, but we haven't quite exchanged phone numbers yet. Keep up the good work, you're on your way to earning a spot in my inner circle!"
    } else if (userScore >= 0.5 * myQuestions.length) {
        showGrade.innerHTML = "E";
        showResult.innerHTML = "Not bad, but not great either. Your score is like a distant acquaintance who occasionally pops up on my Facebook feed. You might know some of the basics, but there's definitely room for improvement if you want to earn a spot in my close circle of friends. Don't worry though, we can always grab coffee and catch up!"
    } else {
        showGrade.innerHTML = "F";
        showResult.innerHTML = "Oh dear, it seems like we've never even met! Your score is like a stranger who accidentally stumbled upon my quiz. It's like we're living in different worlds, or maybe I'm just too complex for you to understand. Don't worry though, we can always start fresh and get to know each other better. Who knows, we might even become best friends one day!"
    }
}

function restart() {
    location.href = "index.html"
    localStorage.clear();
}