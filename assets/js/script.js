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

window.onload = runQuiz();

// Function for the quiz itself

function runQuiz() {
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
    playerScore.innerHTML = `You currently have ${userPoints} out of 15.`

    // delayed hint for if a user takes too long to answer the question
    function hint() {
        let hints = document.getElementById('hint');
        hints.innerHTML = `Hint: ` + myQuestions[now].hint;
    }
    setTimeout(hint, 10000);
    
}