let userPoints = 0;
let now = 0;

// Array with quiz details

let myQuestions = [
    {
        question: 'On which holiday was I born?',
        alts: [
            'Christmas',
            'Halloween',
            'Midsummer',
            'Easter',
        ],
        correct: 'Christmas',
        hint: "The answer is in the wording.",
        funfact: 'A synonym for correct is "right"',
    },
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
];


// Function for the quiz itself

function runQuiz() {
    // hide currently unused html elements
    let showFacts = document.getElementById("area-alternatives");
    showFacts.style.display = '';
    let hideAlts = document.getElementById("funfacts");
    hideAlts.style.display = "none";
    let hideHint = document.getElementById("hint");
    hideHint.style.display = '';

    // writing the question
    let questionArea = document.getElementById("questions");
    questionArea.innerHTML = myQuestions[now].question;

    

    // creating the answer alternatives
    let alternatives = document.getElementById('area-alternatives');

    let qAlts = myQuestions[now].alts;

        // code for shuffling the answer alternatives adapted from: https://stackoverflow.com/questions/49555273/how-to-shuffle-an-array-of-objects-in-javascript
    for (var i = qAlts.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = qAlts[i];
        qAlts[i] = qAlts[j];
        qAlts[j] = temp;
      }

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
    clearTimeout();
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
    countDown();

    let congratulations = document.getElementById("questions");
    congratulations.innerHTML = "Congratulations, you're absolutely right!";

    // hide currently unused html elements
    let showFacts = document.getElementById("funfacts");
    showFacts.style.display = '';
    let hideAlts = document.getElementById("area-alternatives");
    hideAlts.style.display = "none";
    let hideHint = document.getElementById("hint");
    hideHint.style.display = "none";

    let alternatives = document.getElementById('ff-import');
    alternatives.innerHTML = myQuestions[now].funfact;
    console.log(myQuestions[now].funfact);

    let playerScore = document.getElementById("player-score");
    playerScore.innerHTML = `You have ${userPoints} out of ${myQuestions.length} total points.`;

    setTimeout(cleanUp, 9999);
    now++
}


// Paus between questions if the user answered incorrectly

function incorrectFact() {
    countDown();

    let condoleances = document.getElementById("questions");
    condoleances.innerHTML = "Oh no, it looks like you got this one wrong.";

    // hide currently unused html elements
    let showFacts = document.getElementById("funfacts");
    showFacts.style.display = '';
    let hideAlts = document.getElementById("area-alternatives");
    hideAlts.style.display = "none";
    let hideHint = document.getElementById("hint");
    hideHint.style.display = "none";

    let alternatives = document.getElementById('ff-import');
    alternatives.innerHTML = myQuestions[now].funfact;
    console.log(myQuestions[now].funfact);

    let playerScore = document.getElementById("player-score");
    playerScore.innerHTML = `You have ${userPoints} out of ${myQuestions.length} total points.`;

    setTimeout(cleanUp, 9999);
    now++
}

/**
 * Function for countdown during the waiting "fun facts" screen.
 * Code adapted based on this source: https://stackoverflow.com/questions/11075927/how-can-i-use-setinterval-or-settimeout-and-display-the-results-during-the-count/11075956#11075956
*/
function countDown() {
    document.getElementById("countdown").innerHTML = 10;
    let i = 9;
    let counter = setInterval(function() {
        document.getElementById("countdown").innerHTML = i;
        if (i === 0) {
            if (now == myQuestions.length){
                clearInterval(counter);
                quizEnd();
            } runQuiz();
            clearInterval(counter);
        }
        else {
            i--;
        }
    }, 1000);
}

//Function to calculate users final result and print appropriate text on final page
function userGrade() {
    let userString = localStorage.getItem("userPoints")
    let userScore = parseInt(userString) || 0;

    let showSum = document.getElementById('final-score');
    let showGrade = document.getElementById('grade');
    let showResult = document.getElementById('final-result');

    const gradeA = document.createElement('img');
    gradeA.setAttribute('src', '../assets/media/grade-a.png')
    gradeA.setAttribute('alt', 'Image showing user grade to be an A')

    const gradeB = document.createElement('img');
    gradeB.setAttribute('src', '../assets/media/grade-b.png')
    gradeB.setAttribute('alt', 'Image showing user grade to be an B')

    const gradeD = document.createElement('img');
    gradeD.setAttribute('src', '../assets/media/grade-d.png')
    gradeD.setAttribute('alt', 'Image showing user grade to be an D')

    const gradeF = document.createElement('img');
    gradeF.setAttribute('src', '../assets/media/grade-f.png')
    gradeF.setAttribute('alt', 'Image showing user grade to be an F')

    showSum.innerHTML = `Your final score was ${userScore} out of ${myQuestions.length} points.`

    if (userScore >= 0.9 * myQuestions.length) {
        showGrade.innerHTML = gradeA.outerHTML;
        showResult.innerHTML = "Wow, you really know me like the back of your hand! I'm starting to wonder if you're secretly a mind reader or if we've been friends in a past life. Your score is so high, it's like you've been stalking me on Instagram for months. Keep up the good work, you're definitely one of my closest confidants!"
    } else if (userScore >= 0.7 * myQuestions.length) {
        showGrade.innerHTML = gradeB.outerHTML;
        showResult.innerHTML = "Great job, you definitely know a thing or two about me! Your score is like a glimpse into my personality, but there's still some mystery left to unravel. It's like we're starting to become friends, but we haven't quite exchanged phone numbers yet. Keep up the good work, you're on your way to earning a spot in my inner circle!"
    } else if (userScore >= 0.5 * myQuestions.length) {
        showGrade.innerHTML = gradeD.outerHTML;
        showResult.innerHTML = "Not bad, but not great either. Your score is like a distant acquaintance who occasionally pops up on my Facebook feed. You might know some of the basics, but there's definitely room for improvement if you want to earn a spot in my close circle of friends. Don't worry though, we can always grab coffee and catch up!"
    } else {
        showGrade.innerHTML = gradeF.outerHTML;
        showResult.innerHTML = "Oh dear, it seems like we've never even met! Your score is like a stranger who accidentally stumbled upon my quiz. It's like we're living in different worlds, or maybe I'm just too complex for you to understand. Don't worry though, we can always start fresh and get to know each other better. Who knows, we might even become best friends one day!"
    }
}

// Redirections

function quizEnd() {
    location.href = "endpage.html"
}

function restart() {
    location.href = "quiz.html"
    localStorage.clear();
}