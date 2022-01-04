
let quizQuestions = [
    {
        question: "question 1 text",
        answers: ["a", "b", "c"],
        correct: "a"
    },
    {
        question: "question 2 text",
        answers: ["a", "b", "c"],
        correct: "b"
    }
]
//Number of Seconds on Timer
var timeSec = 10
var timerCount = document.getElementById('timer')
var quiz = document.getElementById('quiz')
var startButton = document.getElementById('start')
var timeLeft = function(){
    timeSec--;
    if (timeSec >=0) {
        timerCount.textContent = timeSec
    }
 }

//Timer

function startQuiz() {
    setInterval(timeLeft, 1000)
    timerCount.removeAttribute("style")
    startButton.setAttribute("style", "display: none")
    getQuestion()
}

function getQuestion() {
    var currentQuestion = quizQuestions[0].question
    var questionH2 = document.createElement("h2")
    questionH2.textContent = currentQuestion;
    quiz.appendChild(questionH2)

    quizQuestions[0].answers.forEach((answer)=>{
        var answerEl = document.createElement("button")
        answerEl.textContent = answer;
        quiz.appendChild(answerEl)
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


