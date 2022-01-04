
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

