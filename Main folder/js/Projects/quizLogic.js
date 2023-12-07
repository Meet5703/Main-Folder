function quiz(que, a, b, c, d) {
  console.log(que);
  console.log(`A: ${a}`);
  console.log(`B: ${b}`);
  console.log(`C: ${c}`);
  console.log(`D: ${d}`);
  return [que, a, b, c, d];
}

function checkAnswer(userAnswer, correctAnswer) {
  console.log(`Ans - ${userAnswer}`);
  let score = 0;
  if (userAnswer === correctAnswer) {
    score = score + 10;
    console.log(`Your score is now ${score}, Keep Going Good Work`);
  } else {
    console.log("Answer is Wrong, but it's okay, there's no negative marking.");
    console.log(`Correct Answer is ${correctAnswer}`);
  }
}

quiz("What is the value of 2 + 2 ?", 1, 2, 3, 4);
checkAnswer(2, 4);
quiz("What is the value of 2 + 2 ?", 1, 2, 3, 4);
checkAnswer(2, 4);
quiz("What is the value of 2 + 2 ?", 1, 2, 3, 4);
checkAnswer(2, 4);
quiz("What is the value of 2 + 2 ?", 1, 2, 3, 4);
checkAnswer(2, 4);
quiz("What is the value of 2 + 2 ?", 1, 2, 3, 4);
checkAnswer(2, 4);
