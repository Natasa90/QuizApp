/* 
STEP 1: Create an array of objects with questions, answers and declare index for correct answer. 
STEP 2: Declare variable for current question index - so the quiz would start from the 1. question and
        declare variable for score that is goint to be displayed as user gives correct/wrong answers.   
STEP 3: Make function for loading questions, with buttons - each one is going to be displayed as possible answer. 
STEP 4: Create a function that will be called when some of the answer buttons is clicked on - to add correct answer point to the score and move to another question, or if the 
        end is reached - show the final score. 
STEP 5: Create a function that will display the final score if the end of questions is reached. 
*/


// STEP 1
const quizQuestions = [
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

//STEP 2
let currentQuestionIndex = 0; 
let result = 0; 

//STEP 3
function loadQuestions () { 

    let questionElement = document.getElementById("questions"); 
    let answerElement = document.getElementById("answers"); 

    answerElement.innerHTML = ""; 

    const currentQuestion = quizQuestions[currentQuestionIndex]; // currentQuestion is the first object in quizQuestions array!
    questionElement.textContent = currentQuestion.question; 

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");   // creating button for each answer;  
        button.className = "choice";     // creating class for buttons so we can style them in css; 
        button.textContent = answer;     // creating text for each button out of element answer (in this case - currentQuestion.answers);   
        button.addEventListener = ("click", () => selectChoice(index)); 
        answerElement.appendChild(button); 
    });
}

function selectChoice (index) { 
    const currentQuestion = quizQuestions[currentQuestionIndex]; 
    
    if (index === currentQuestion.correct) { 
        result ++; 
    }

    currentQuestionIndex++;   // moving to another question; 

    if (currentQuestionIndex < quizQuestions.length) { 
        loadQuestions();    // if user hasn't reached the last question, repeat loadQuestions function - go to another question  
    } else {
        displayResult();   // new function 
    }
}

function displayResult () { 
    const resultElement = document.getElementById("result");  
    resultElement.textContent = `Your have reached the end of the quiz. Your final score is ${result}.`
}

document.getElementById("next-question").addEventListener("click", () => {
    if (currentQuestionIndex < quizQuestions.length) { 
        loadQuestions(); 
    }
}); 

document.addEventListener("DOMContentLoaded", loadQuestions);  




