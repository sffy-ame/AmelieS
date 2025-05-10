// ----------- LOGIQUE DU QUIZ -----------

const questions = [
    { text: "Quelle est la capitale de la France ?", responses: ["Paris", "Lyon", "Marseille", "Nice"], correctIndex: 0 },
    { text: "Quel est le résultat de 7 × 8 ?", responses: ["64", "56", "48", "72"], correctIndex: 1 },
    { text: "Quel est le plus grand océan ?", responses: ["Atlantique", "Pacifique", "Indien", "Arctique"], correctIndex: 1 },
    { text: "Qui a peint la Joconde ?", responses: ["Leonardo da Vinci", "Michel-Ange", "Raphaël", "Vincent van Gogh"], correctIndex: 0}
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");

    if (currentQuestionIndex >= questions.length) {
        questionElement.innerText = "Quiz terminé !";
        answerButtons.innerHTML = "";
        return;
    }

    let currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.text;
    answerButtons.innerHTML = ""; 

    currentQuestion.responses.forEach((response, index) => {
        const button = document.createElement("button");
        button.classList.add("answer-button");
        button.innerText = response;
        button.onclick = () => checkAnswer(index === currentQuestion.correctIndex);
        answerButtons.appendChild(button);
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        correctAnswers++;
    }

    currentQuestionIndex++; 
    loadQuestion(); 
}

function showStats() {
    let totalQuestions = questions.length;
    let percentage = (correctAnswers / totalQuestions) * 100;
    let statsResult = document.getElementById("stats-result");
    statsResult.innerText = `Tu as ${correctAnswers} bonnes réponses sur ${totalQuestions} (${percentage.toFixed(1)}%) ! 🎉`;
    statsResult.style.display = "block";
}

document.addEventListener("DOMContentLoaded", loadQuestion);

function bruteForceQuiz() {
    let attempts = 0;
    let correctAnswers = 0;

    questions.forEach((question, questionIndex) => {
        let found = false;

        for (let i = 0; i < question.responses.length; i++) { 
            attempts++;
            if (i === question.correctIndex) {
                correctAnswers++;
                found = true;
                break;
            }
        }
    });

    let totalQuestions = questions.length;
    let percentage = (correctAnswers / totalQuestions) * 100;
    document.getElementById("brute-result").innerText = `Brute Force terminé ! ${correctAnswers} bonnes réponses trouvées sur ${totalQuestions} (${percentage.toFixed(1)}%) en ${attempts} essais. 🔥`;
}



// ----------- LOGIQUE DE LA CALCULATRICE -----------

function clearDisplay() {
    document.getElementById("display").value = "";
}
function appendValue(value) {
    document.getElementById("display").value += value;
}
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Erreur";
    }
}
