let userPoints = 0;
let now = 0;

// Array with quiz details

let myQuestions = [
    {
        question: 'On which holiday was I born?',
        alts: [
            'Christmas',
            'Easter',
            'Midsummer',
            'Thanksgiving',
        ],
        correct: 'Christmas',
        hint: "Never a day.",
        funfact: 'I am born on december 24th (Christmas Eve).<br><br>When I was younger, my family had a shorter Christmas Eve than others. This because we always made sure that it was strictly my birthday until 12:00 pm on the day, no christmas celebrations until later.',
    },
    {
        question: 'What is it that terrifies me most?',
        alts: [
            'Oceans',
            'Spiders',
            'Heights',
            'Confined spaces',
        ],
        correct: 'Oceans',
        hint: "Body has, body of.",
        funfact: 'I am absolutely terrified of oceans.<br><br>My pulse actually spikes if I see an underwater scene on television, or if a game forces me to swim.',
    },
    {
        question: 'Where would I most like to travel?',
        alts: [
            'Isle of Skye, Scotland',
            'Geiranger Fjord, Norway',
            'Ruyi Bridge, China',
            'Moraine Lake, Canada',
        ],
        correct: 'Ruyi Bridge, China',
        hint: "An inbetween.",
        funfact: "I'd love to visit Ruyi Bridge, China.<br><br>If money wasn't an issue, I would spend one month each in China, Japan and South Korea respectively. Food, architecture, rural scenery and culture are only some of the things about Asia that fascinate me.",
    },
    {
        question: 'What is my favourite genre of books to read?',
        alts: [
            'Fantasy',
            'Romance',
            'Thriller',
            'Non-Fiction',
        ],
        correct: 'Fantasy',
        hint: "Bohemian Rhapsody.",
        funfact: 'I love Fantasy. In books, shows and movies.<br><br>Since I started keeping track (2020), I have read and listened to approximately 400 books. 84% of those books belong in the fantasy genre.',
    },
    {
        question: 'What subject have I previously studied most?',
        alts: [
            'Behavioural Science',
            'Business',
            'Music',
            'Health Science',
        ],
        correct: 'Music',
        hint: "Invisible.",
        funfact: "I've studied Music previously.<br><br>I have had a focus towards music production and song writing, although I've of course also played a lot of music live.",
    },
    {
        question: 'Which is my favourite mythological creature?',
        alts: [
            'Dragon',
            'Unicorn',
            'Kitsune',
            'Phoenix',
        ],
        correct: 'Dragon',
        hint: "The shortest of all.",
        funfact: "I'm obsessed with Dragons!<br><br>I have a huge tattoo of a frost dragon on my left upper arm, along with other fantasy elements that make up a sleeve. I also have a tattoo idea for a phoenix however.",
    },
    {
        question: 'Which musical instrument did I first learn?',
        alts: [
            'Piano',
            'Guitar',
            'Flute',
            'Harp',
        ],
        correct: 'Piano',
        hint: "Take it easy.",
        funfact: "I have played Piano since age 5.<br><br>Music is my number one way of expressing myself as well as sorting out my emotions and thoughts. I really can't imagine a life without playing music.",
    },
    {
        question: 'Which is my favourite English accent?',
        alts: [
            'British from Scotland',
            'British from Liverpool',
            'American from North Carolina',
            'American from Oregon',
        ],
        correct: 'American from North Carolina',
        hint: "On the up and up.",
        funfact: "North Carolina accents melts me!<br><br>As a gamer I am lucky enough to have friends from all over the world. Out of everyone I've had close contact with, North Carolina accents are by far the most charming.",
    },
    {
        question: 'Who are my favourite band?',
        alts: [
            'The band CAMINO',
            'Rascal Flatts',
            'Dirty Loops',
            'Just wrong',
        ],
        correct: 'Rascal Flatts',
        hint: "Feels like today.",
        funfact: "If I really <strong>had</strong> to chose, it'd be Rascal Flatts.<br><br>Rascal Flatts is the absolut perfect band to listen to in the car, while totally driving according to the speeding limit. Feel good!",
    },
    {
        question: 'Which is my number one guilty pleasure?',
        alts: [
            'Happy dancing on my own',
            'Shower Singing Off Key',
            'All in air guitar solos',
            'Watching TV Show Glee',
        ],
        correct: 'Watching TV Show Glee',
        hint: "Not you, not me, but",
        funfact: "I'm a real sucker for Glee.<br><br>I honestly have no idea how many times I've seen the show in its entirety. It's just the perfect mix of silly feel good music and important anti bullying.. /shrug",
    },
    {
        question: 'Which of these compulsions must I always do?',
        alts: [
            'Drink in sips of 5',
            'Lock the door 3 times',
            'Tap 2 times on books',
            'Begin stairs with right foot',
        ],
        correct: 'Drink in sips of 5',
        hint: "Don't run out.",
        funfact: "I always drink in sips of 5.<br><br>When it comes to water, this is quite alright. However, as you can imagine, there are other beverages that can be slightly more problematic.",
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
    playerScore.innerHTML = `You have ${userPoints} out of ${myQuestions.length} total points.`;

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
        localStorage.setItem("userPoints", userPoints);
        
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
    playerScore.innerHTML = `You have ${userPoints} out of ${myQuestions.length} total points.`;
}


// Paus between questions if the user answered correctly

function correctFact() {
    countDown();

    let congratulations = document.getElementById("questions");
    congratulations.innerHTML = "That is correct!";

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
    now++;
}


// Paus between questions if the user answered incorrectly

function incorrectFact() {
    countDown();

    let condoleances = document.getElementById("questions");
    condoleances.innerHTML = "That's unfortunately wrong.";

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
    now++;
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
    let userString = localStorage.getItem("userPoints");
    let userScore = parseInt(userString) || 0;

    let showSum = document.getElementById('final-score');
    let showGrade = document.getElementById('grade');
    let showResult = document.getElementById('final-result');

    const gradeA = document.createElement('img');
    gradeA.setAttribute('src', 'assets/media/grade-a.webp');
    gradeA.setAttribute('alt', 'Image showing user grade to be an A');

    const gradeB = document.createElement('img');
    gradeB.setAttribute('src', 'assets/media/grade-b.webp');
    gradeB.setAttribute('alt', 'Image showing user grade to be an B');

    const gradeD = document.createElement('img');
    gradeD.setAttribute('src', 'assets/media/grade-d.webp');
    gradeD.setAttribute('alt', 'Image showing user grade to be an D');

    const gradeF = document.createElement('img');
    gradeF.setAttribute('src', 'assets/media/grade-f.webp');
    gradeF.setAttribute('alt', 'Image showing user grade to be an F');

    showSum.innerHTML = `Your final score was ${userScore} out of ${myQuestions.length} points.`;

    if (userScore >= 0.9 * myQuestions.length) {
        showGrade.innerHTML = gradeA.outerHTML;
        showResult.innerHTML = "Wow, you really know me like the back of your hand! I'm starting to wonder if you're secretly a mind reader or if we've been friends in a past life. Your score is so high, it's like you've been stalking me on Instagram for months. Keep up the good work, you're definitely one of my closest confidants!";
    } else if (userScore >= 0.7 * myQuestions.length) {
        showGrade.innerHTML = gradeB.outerHTML;
        showResult.innerHTML = "Great job, you definitely know a thing or two about me! Your score is like a glimpse into my personality, but there's still some mystery left to unravel. It's like we're starting to become friends, but we haven't quite exchanged phone numbers yet. Keep up the good work, you're on your way to earning a spot in my inner circle!";
    } else if (userScore >= 0.5 * myQuestions.length) {
        showGrade.innerHTML = gradeD.outerHTML;
        showResult.innerHTML = "Not bad, but not great either. Your score is like a distant acquaintance who occasionally pops up on my Facebook feed. You might know some of the basics, but there's definitely room for improvement if you want to earn a spot in my close circle of friends. Don't worry though, we can always grab coffee and catch up!";
    } else {
        showGrade.innerHTML = gradeF.outerHTML;
        showResult.innerHTML = "Oh dear, it seems like we've never even met! Your score is like a stranger who accidentally stumbled upon my quiz. It's like we're living in different worlds, or maybe I'm just too complex for you to understand. Don't worry though, we can always start fresh and get to know each other better. Who knows, we might even become best friends one day!";
    }
}

// Redirections

function quizEnd() {
    location.href = "endpage.html";
}

function restart() {
    location.href = "quiz.html";
    localStorage.clear();
}

// // Event listeners to remove function calls from HTML files
window.onload = function () {
    if (window.location.href.includes("quiz.html")) {
        runQuiz();
    } else if (window.location.href.includes("endpage.html")) {
        userGrade();
    }
};

const startQuizButton = document.getElementById("start-quiz");

startQuizButton.addEventListener("click", function () {
    restart();
});