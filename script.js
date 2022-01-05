var ansCorrect = 0
var ansWrong = 0
var questionNumber = 0

var correct = document.getElementById("correct")
correct.textContent = "Correct Answers: 0 "

let quizQuestions = [
    {
        question: "How many planets are in our solar system?",
        answers: ["8", "10", "6"],
        correct: "8"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Saturn", "Jupiter", "Earth"],
        correct: "Jupiter"
    },
    {
        question: "How many moons does Mars have?",
        answers: ["3", "6", "2"],
        correct: "2"
    },
    {
        question: "Which of these planets has rings?",
        answers: ["Earth", "Uranus", "Mercury"],
        correct: "Uranus"
    },
    {
        question: "How many gaseous planets are in our solar system?",
        answers: ["4", "2", "5"],
        correct: "4"
    },
    {
        question: "Which of these is not a gas giant?",
        answers: ["Saturn", "Uranus", "Venus"],
        correct: "Venus"
    },
    {
        question: "How many times larger is Jupiter than Earth?",
        answers: ["100", "23", "11"],
        correct: "11"
    }
]



//Number of Seconds on Timer
var timeSec = 100
var timerCount = document.getElementById('timer')
var quiz = document.getElementById('quiz')
var startButton = document.getElementById('start')
var timeLeft = function () {
    timeSec--;
    if (timeSec >= 0) {
        timerCount.textContent = timeSec
    }
}

//Timer
var timer
function startQuiz() {
    timer = setInterval(timeLeft, 1000)
    timerCount.removeAttribute("style")
    startButton.setAttribute("style", "display: none")
    getQuestion()
}



function getQuestion() {
    var currentQuestion = quizQuestions[questionNumber]

    var questionH2 = document.createElement("h2")
    questionH2.textContent = currentQuestion.question;
    quiz.appendChild(questionH2)

    console.log(currentQuestion.correct)

    currentQuestion.answers.forEach((answer) => {
        var answerEl = document.createElement("button")
        answerEl.textContent = answer;
        quiz.appendChild(answerEl)
        answerEl.onclick = function () {
            console.log(answer)
            console.log(currentQuestion.correct)
            if (answer === currentQuestion.correct) {
                ansCorrect++
                correct.textContent = "Correct Answers: " + ansCorrect + "\/7"
            }
            else {
                timeSec -= 10
            }
            console.log("Next question")
            questionNumber++;
            if (questionNumber == quizQuestions.length) {
                quiz.innerHTML = "";
                clearInterval(timer);
            }
            else {
                quiz.innerHTML = "";
                getQuestion();
            }
            
           
        }

    })
}

startButton.addEventListener("click", startQuiz)

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


