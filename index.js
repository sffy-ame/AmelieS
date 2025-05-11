// ----------- LOGIQUE DU QUIZ -----------

const questions = [
    { text: "Quel est le tout premier film Barbie sorti en 2001 ?", responses: ["Barbie et le lac des cygnes", "Barbie dans Casse-Noisette", "Barbie, Princesse Raiponce", "Barbie : Coeur de Princesse"], correctIndex: 1 },
    { text: "Dans quel film Barbie joue-t-elle le rôle de Geneviève, une princesse qui découvre un passage secret ?", responses: ["Barbie au bal des douze princesses", "Barbie et la Porte secrète", "Barbie et le palais de diamant", "Barbie : La Princesse et la Popstar"], correctIndex: 1 },
    { text: "Quel film Barbie met en scène une princesse et une popstar qui échangent leurs vies ?", responses: ["Barbie Rock et Royales", "Barbie : Coeur de Princesse", "Barbie : La Princesse et la Popstar", "Barbie et ses soeurs au club hippique"], correctIndex: 2 },
    { text: "Dans quel film Barbie découvre-t-elle un pinceau magique qui lui permet de s'évader de sa tour ?", responses: ["Barbie princesse Raiponce", "Barbie et la Magie des Perles", "Barbie et le Secret des Sirènes", "Barbie et la Porte Secrète"], correctIndex: 0},
    { text: "Quel film Barbie se déroule dans un royaume sous-marin où elle découvre qu'elle est une sirène ?", responses: ["Barbie et la Magie des dauphins", "Barbie : Aventure dans les étoiles", "Barbie et la Magie de Noël", "Barbie et le Secret des Sirènes"], correctIndex: 3}
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

    questions.forEach((question) => {
        for (let i = 0; i < question.responses.length; i++) { 
            attempts++;
            if (i === question.correctIndex) {
                correctAnswers++;
                break;
            }
        }
    });

    let totalQuestions = questions.length;
    let percentage = (correctAnswers / totalQuestions) * 100;
    
    
    document.getElementById("brute-result").innerText = `Brute Force terminé ! ${correctAnswers} bonnes réponses sur ${totalQuestions} (${percentage.toFixed(1)}%) en ${attempts} essais. 🔥`;
    
    
    if (percentage === 100) {
        setTimeout(() => {
            window.location.href = "../contact.html";
        }, 2000);
    }
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
