/*
STEP 1. create array of objects with questions, asnwers and declare index for correct answer
STEP 2. declare variable for current question index so quiz would start from the first question = 0 
and declare variable for score that is going to be displayed = 0
STEP 3. make function that will load questions
STEP 4. creating a function that will be called when answer button is clicked
STEP 5. creating funstion that will display final score at the end
*/



//STEP 1//
const questions = [
    {
        question: "What is the name of the tallest mountain in the world?",
        answers: ["Mount Everest", "Makalu", "Broad Peak", "Sagarmatha"],
        correct: 0
    },
    {
        question: "Which country has the largest population in the world?",
        answers: ["USA", "Russia", "China", "Serbia"],
        correct: 2
    },
    {
        question: "What is the name of the longest river in Africa?",
        answers: ["Niger", "The Nile River", "Congo River", "Lulonga"],
        correct: 1
    },
    {
        question: "What is the name of the largest country in the world?",
        answers: ["China", "India", "Russia", "USA"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;


function loadQuestions(){
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answers");

    answerElement.innerHTML = "";

    const currentQuestion = questions[currentQuestionIndex];//currentQuestion is the first object in array
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer,index) => {
        const button = document.createElement("button");//creating button for each answer
        button.className = "answer";// creating class for this button
        button.textContent = answer;//creating text for button which is text in object under "answers"
        button.addEventListener("click", () => selectAnswer(index));// on button click we call function that takes index of selected answer
        answerElement.appendChild(button);
    });
};


function selectAnswer(index){
    const currentQuestion = questions[currentQuestionIndex];

    if (index === currentQuestion.correct){ //if index is same to correct answer index from object
        score++;
    }

    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){//moving to next question
        loadQuestions();
    }else{
    displayScore()//call function that will display score at the end, and will define this function below
    }
}
function displayScore(){
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Your score is ${score} out of ${questions.length}.`;
}

const buttonNextQuestion = document.getElementById("nextQuestion");
buttonNextQuestion.addEventListener("click", () =>{
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        loadQuestions();
    } else { 
        displayScore();
    }
});

document.addEventListener("DOMContentLoaded", loadQuestions);