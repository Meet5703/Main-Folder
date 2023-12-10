let que = document.getElementById("question");
let options = document.getElementsByClassName("opt");
let score = document.getElementById("score");
let btnPrevious = document.getElementById("previousQ");
let btnNext = document.getElementById("nextQ");
let optNotchkd = document.getElementById("optnotchkd");
let btnSubmit = document.getElementById("submitAnswer");
let queCount = document.getElementById("quect");

let objOFques = [
  {
    question: "What is the capital of India?",
    options: ["A - Mumbai", "B - Kolkata", "C - New Delhi", "D - Chennai"],
    correctAnswer: "C - New Delhi",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["A - Jupiter", "B - Mars", "C - Venus", "D - Saturn"],
    correctAnswer: "B - Mars",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["A - Jupiter", "B - Mars", "C - Venus", "D - Saturn"],
    correctAnswer: "B - Mars",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["A - Jupiter", "B - Mars", "C - Venus", "D - Saturn"],
    correctAnswer: "B - Mars",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["A - Jupiter", "B - Mars", "C - Venus", "D - Saturn"],
    correctAnswer: "B - Mars",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["A - Jupiter", "B - Mars", "C - Venus", "D - Saturn"],
    correctAnswer: "B - Mars",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["A - Jupiter", "B - Mars", "C - Venus", "D - Saturn"],
    correctAnswer: "B - Mars",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["A - Jupiter", "B - Mars", "C - Venus", "D - Saturn"],
    correctAnswer: "B - Mars",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["A - Jupiter", "B - Mars", "C - Venus", "D - Saturn"],
    correctAnswer: "B - Mars",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["A - Jupiter", "B - Mars", "C - Venus", "D - Saturn"],
    correctAnswer: "B - Mars",
  },
  // Include other questions here...
];

let index = 0;
let initialscore = 0;
let queCt = 1;
let totalQuestions = objOFques.length;

function queBank() {
  let queNow = objOFques[index];
  que.innerHTML = queNow.question;

  for (let i = 0; i < options.length; i++) {
    options[i].innerHTML = queNow.options[i];
  }

  score.textContent = `Score - ${initialscore}`;
  queCount.textContent = `Question - ${queCt} / ${totalQuestions}`;
  return queNow;
}
let flagStop = 0;
// Answer check function
btnSubmit.addEventListener("click", function checkAns() {
  let queNow = objOFques[index];
  let inputName = document.querySelector("input[name=option]:checked");

  if (inputName) {
    if (flagStop === 0) {
      let userAnswer = inputName.value;
      let correctValue = queNow.correctAnswer;

      if (
        userAnswer === correctValue ||
        queNow.options[userAnswer - 1] === correctValue
      ) {
        initialscore += 10;
        score.textContent = `Score - ${initialscore}`;
        flagStop = 1;
      }
    }
  } else {
    optNotchkd.innerHTML = "<h4>Please select an option</h4>";
  }
});

// Previous and Next button logic
btnNext.addEventListener("click", function () {
  let queNow = objOFques[index];
  let inputName = document.querySelector("input[name=option]:checked");

  if (inputName) {
    if (flagStop === 0) {
      let userAnswer = inputName.value;
      let correctValue = queNow.correctAnswer;

      if (
        userAnswer === correctValue ||
        queNow.options[userAnswer - 1] === correctValue
      ) {
        initialscore += 10;
        score.textContent = `Score - ${initialscore}`;
        flagStop = 1;
      }
    }
  } else {
    optNotchkd.innerHTML = "<h4>Please select an option</h4>";
  }
  if (index < totalQuestions - 1) {
    index++;
    queCt++;
    queBank();
    flagStop = 0;
  }
});

btnPrevious.addEventListener("click", function () {
  if (index > 0) {
    index--;
    queCt--;
    queBank();
  }
});

queBank();
