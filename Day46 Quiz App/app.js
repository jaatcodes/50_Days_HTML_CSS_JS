const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "CSS stands for?",
        a: "Cascading Style Sheets",
        b: "C Style Sheets",
        c: "Car SUV Service ",
        d: "None of these",
        correct: "a",
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    // console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${
                quizData.length
            } questions correctly <br> Your accuracy is ${(
                (score * 100) /
                quizData.length
            ).toFixed(2)}% </h2>

            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((ansEl) => (ansEl.checked = false));
}

function getSelected() {
    let answer;
    answerEls.forEach((ansEl) => {
        if (ansEl.checked) {
            answer = ansEl.id;
        }
    });
    return answer;
}
