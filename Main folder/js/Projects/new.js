var que = document.querySelector("#question");
var optA = document.querySelector("#labelOptA");
var optB = document.querySelector("#labelOptB");
var optC = document.querySelector("#labelOptC");
var optD = document.querySelector("#labelOptD");
var score = document.querySelector("#score");
var btnPrevious = document.querySelector("#previousQ");
var btnNext = document.querySelector("#nextQ");
var correctAnswer;
var optNotchkd = document.querySelector("#optnotchkd");
var btnSubmit = document.querySelector("#submitAnswer");
var queCount = document.querySelector("#quect");

let objOFques = [
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: {
      a: "A - Jupiter",
      b: "B - Mars",
      c: "C - Venus",
      d: "D - Saturn",
    },
    correctAnswer: "B - Mars",
  },
  {
    question: "what is value of 2 - 1  ??",
    options: { a: `A - ${1}`, b: `B - ${2}`, c: `C - ${3}`, d: `D - ${4}` },
    correctAnswer: "1",
  },
  {
    question: "what is value of 2 - 1 + 2  ??",
    options: { a: `A - ${1}`, b: `B - ${2}`, c: `C - ${3}`, d: `D - ${4}` },
    correctAnswer: 3,
  },
  {
    question: "what is value of 2 - 1 + 2  ??",
    options: { a: `A - ${1}`, b: `B - ${2}`, c: `C - ${3}`, d: `D - ${4}` },
    correctAnswer: "3",
  },
  {
    question: "what is value of 2 - 1 + 2  ??",
    options: { a: `A - ${1}`, b: `B - ${2}`, c: `C - ${3}`, d: `D - ${4}` },
    correctAnswer: "3",
  },
  {
    question: "what is value of 2 - 1 + 2  ??",
    options: { a: `A - ${1}`, b: `B - ${2}`, c: `C - ${3}`, d: `D - ${4}` },
    correctAnswer: "3",
  },
  {
    question: "what is value of 2 - 1 + 2  ??",
    options: { a: `A - ${1}`, b: `B - ${2}`, c: `C - ${3}`, d: `D - ${4}` },
    correctAnswer: "3",
  },
  {
    question: "what is value of 2 - 1 + 2  ??",
    options: { a: `A - ${1}`, b: `B - ${2}`, c: `C - ${3}`, d: `D - ${4}` },
    correctAnswer: "3",
  },
  {
    question: "what is value of 2 - 1 + 2  ??",
    options: { a: `A - ${1}`, b: `B - ${2}`, c: `C - ${3}`, d: `D - ${4}` },
    correctAnswer: "3",
  },
  {
    question: "what is value of 2 - 1 + 2  ??",
    options: { a: `A - ${1}`, b: `B - ${2}`, c: `C - ${3}`, d: `D - ${4}` },
    correctAnswer: "3",
  },
];

let index = 0;
let initialscore = 0;
let queCt = 1;

let totalQuestions = objOFques.length;

function queBank() {
  let queNow = objOFques[index];
  que.innerHTML = queNow.question;
  optA.innerHTML = queNow.options.a;
  optB.innerHTML = queNow.options.b;
  optC.innerHTML = queNow.options.c;
  optD.innerHTML = queNow.options.d;
  score.innerHTML = `Score - ${initialscore}`;
  queCount.innerHTML = `Question - ${queCt} / ${totalQuestions}`;
  return queNow;
}

btnNext.addEventListener("click", function () {
  if (index < objOFques.length) {
    index++;
    queCt++;
    queBank();
  }
});

btnPrevious.addEventListener("click", function () {
  if (index > 0) {
    index--;
    queCt--;
    queBank();
  }
});

// Answer check function
stopInfiniteScore = 0;

btnSubmit.addEventListener("click", function checkAns() {
  let queNow = objOFques[index];
  let inputName = document.querySelector("input[name=option]:checked");

  if (inputName) {
    let userAnswer = inputName.value;
    let correctValue = queNow.correctAnswer.toString().trim().toLowerCase();

    // Check if the user's answer matches the correct answer
    if (isNaN(userAnswer) || isNaN(correctValue)) {
      // If either answer is not a number, compare as strings
      if (userAnswer === correctValue) {
        if (stopInfiniteScore === 0) {
          initialscore += 10;
          score.innerHTML = `Score - ${initialscore}`;
          stopInfiniteScore = 1;
        }
      }
    } else {
      // If both are numeric, compare as numbers
      if (parseFloat(userAnswer) === parseFloat(correctValue)) {
        if (stopInfiniteScore === 0) {
          initialscore += 10;
          score.innerHTML = `Score - ${initialscore}`;
          stopInfiniteScore = 1;
        }
      }
    }
  } else {
    optNotchkd.innerHTML = "Please select an option";
  }
});

queBank();
