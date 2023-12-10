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
    question: "Who was the first Prime Minister of India?",
    options: [
      "A - Mahatma Gandhi",
      "B - Jawaharlal Nehru",
      "C - Indira Gandhi",
      "D -  Sardar Vallabhbhai Patel",
    ],
    correctAnswer: "B - Jawaharlal Nehru",
  },
  {
    question:
      "How many Lok Sabha (House of the People) seats are there in the Indian Parliament?",
    options: ["A - 545", "B - 552", "C - 543", "D -  550"],
    correctAnswer: "C - 543",
  },
  {
    question: "Which Indian festival is known as the Festival of Lights?",
    options: ["A - Holi", "B - Diwali ", "C - Navratri", "D - Ram-Navmi"],
    correctAnswer: "B - Diwali",
  },
  {
    question: "Who is known as the Missile Man of India?",
    options: [
      "A - Dr. A.P.J. Abdul Kalam",
      "B - Vikram Sarabhai",
      "C -  C.V. Raman",
      "D - Homi Bhabha",
    ],
    correctAnswer: "A - Dr. A.P.J. Abdul Kalam",
  },
  {
    question: "In which sport is the Ranji Trophy associated?",
    options: ["A -  Cricket", "B - Hockey", "C -  Football", "D - Badminton"],
    correctAnswer: "A -  Cricket",
  },
  {
    question: "What is the currency of India?",
    options: ["A - Rupee", "B - Rupiah", "C - Taka", "D - Baht"],
    correctAnswer: "A - Rupee",
  },
  {
    question: "Who wrote the book The 'Discovery of India'?",
    options: [
      "A -  Rabindranath Tagore",
      "B - Jawaharlal Nehru",
      "C - R.K. Narayan",
      "D -  Vikram Seth",
    ],
    correctAnswer: "B - Jawaharlal Nehru",
  },
  {
    question:
      "What is the name of the historic monument located in Agra, India, built by Shah Jahan?",
    options: [
      "A -  Hawa Mahal",
      "B -  Red Fort",
      "C - Qutub Minar",
      "D -  Taj Mahal",
    ],
    correctAnswer: "D -  Taj Mahal",
  },
  {
    question: "Which Indian city is known as the 'Oxford of the East'?",
    options: ["A - Pune", "B - Kolkata", "C -  Mumbai", "D - Delhi"],
    correctAnswer: "A - Pune",
  },
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
