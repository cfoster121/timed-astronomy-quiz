var timeSec = 31 //Number of Seconds on Timer
var timerCount = document.getElementById('timer') 
var quiz = document.getElementById('quiz')
var startButton = document.getElementById('start')
var scores = document.getElementById('scores')
var ansCorrect = 0 //Number of quiz questions user answers correctly
var questionNumber = 0 //Position of current question in quizQuestions array
li1.innerHTML = localStorage.getItem("ScoreInitials"); //Display local storage as list item on page load

//Section showing number of questions answered correctly as quiz is being taken
var correct = document.getElementById("correct")
correct.textContent = "Correct Answers: 0 "

//Quiz Questions, Answer Options, and Correct Answers//
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

//Timer Counts down, displays time left, and stops at 0//
var timeLeft = function () {
    timeSec--;
    if (timeSec >= 0) {
        timerCount.textContent = timeSec;
    }
    if (timeSec === 0) {
        alert("Out of time! Try again")
        return
    }
}

//Fucntion executed when Start button is clicked
function startQuiz() {
    timerCount.removeAttribute("style") //Timer displays on page
    timer = setInterval(timeLeft, 1000) //Timer starts, decrements by 1 second
    startButton.setAttribute("style", "display: none") //Start button hidden from page
    getQuestion() //Run quiz question function
}

//Quiz Question function//
function getQuestion() {
    var currentQuestion = quizQuestions[questionNumber]

    //Create H2 element containing question value//
    var questionH2 = document.createElement("h2")
    questionH2.textContent = currentQuestion.question;
    quiz.appendChild(questionH2)

    //Create 1 button displaying each answer option for each question//
    currentQuestion.answers.forEach((answer) => {
        var answerEl = document.createElement("button")
        answerEl.textContent = answer;
        quiz.appendChild(answerEl)

        //Function executed when clicking answer buttons//        
        answerEl.onclick = function () {

            //If the answer is correct, add 1 to correct answer counter//
            if (answer === currentQuestion.correct) {
                ansCorrect++
                correct.textContent = "Correct Answers: " + ansCorrect + "\/7"
            }
            //If answer is incorrect subtract 10 seconds from timer//
            else {
                timeSec -= 10
            }
            //Move to next question//
            questionNumber++;

            //If the current question index number is equal to the total length of the question array, stop timer and clear quiz//
            if (questionNumber == quizQuestions.length) {
                quiz.innerHTML = "";
                clearInterval(timer);
                document.getElementById("hide").removeAttribute("style");
            }
            else {
                quiz.innerHTML = "";
                getQuestion();
            }
        }
    })
}

//Function executed when Save Score button is clicked
const submitScore = (evnt) => {
    evnt.preventDefault(); //prevent page from refreshing on click
    if (document.querySelector("input").value == "") {
        alert("Must enter letters");
        return false; //User must input letters into form
    }
    //Value saved to storage will be initials + correct answer value
    let saved = li1.innerHTML = document.querySelector("input").value + " --- " + ansCorrect;
    localStorage.setItem("ScoreInitials", saved); //Store saved to local storage
    document.querySelector("form").reset(); //Clear form after submit

}

//Run submitScore when clicking Save Score button//
document.getElementById("saveScoreBtn").addEventListener("click", submitScore);

//Start Quiz when clicking Start button//
startButton.addEventListener("click", startQuiz);