let question = document.querySelector("#question");
let optA = document.querySelector("#labelOptA");
let optB = document.querySelector("#labelOptB");
let optC = document.querySelector("#labelOptC");
let optD = document.querySelector("#labelOptD");
let correctAnswer; // Declaring correctAnswer globally

function displayQuestion(que, a, b, c, d, correct) {
  question.innerHTML = que;
  optA.innerHTML = `A - ${a}`;
  optB.innerHTML = `B - ${b}`;
  optC.innerHTML = `C - ${c}`;
  optD.innerHTML = `D - ${d}`;
  correctAnswer = correct; // Storing the correct answer globally
}

let score = document.querySelector("#score");
score.innerHTML = `score = ${0}`;

function answerCheck() {
  let userAnswer = document.querySelector("input[name='option']:checked");
  if (userAnswer) {
    let selectedAnswer = userAnswer.value;
    if (selectedAnswer === correctAnswer) {
      let currentScore = parseInt(score.textContent.split("=")[1].trim());
      let updatedScore = currentScore + 10;
      score.innerHTML = `score = ${updatedScore}`;
      console.log("Correct Answer!");
    } else {
      console.log("Wrong Answer, but it's okay. No negative marking.");
      console.log(`Correct Answer is ${correctAnswer}`);
    }
  } else {
    console.log("Please select an answer!");
  }
}

let btn = document.querySelector("#submitAnswer");
let idx = 0;
btn.addEventListener("click", function () {
  if (idx === 0) {
    answerCheck();
    idx = 1;
  } else {
    idx = 0;
  }
});

displayQuestion("What is the value of 2 + 2 ?", 1, 2, 3, 4, "4");
displayQuestion("What is the value of 11 x 4 ?", 14, 44, 19, 8, "44");
