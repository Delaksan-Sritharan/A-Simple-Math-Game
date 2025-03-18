function getOperand() {
  const operands = ['+', '-', '*', '/']; // Define the possible operands
  const randomIndex = Math.floor(Math.random() * operands.length);
  return operands[randomIndex];
}

var questions = [];
var userAnswerArr = [];
var correctAnswer = [];

for (let i = 0; i < 10; i++) {
  let numberOne = Math.floor(Math.random() * 101);
  let numberTwo = Math.floor(Math.random() * 101);
  let operand = getOperand();

  let question;
  let answer;

  switch (operand) {
      case '+':
          question = `${numberOne} + ${numberTwo} = ?`;
          answer = numberOne + numberTwo;
          break;
      case '-':
          question = `${numberOne} - ${numberTwo} = ?`;
          answer = numberOne - numberTwo;
          break;
      case '*':
          question = `${numberOne} * ${numberTwo} = ?`;
          answer = numberOne * numberTwo;
          break;
      case '/':
          // Avoid division by zero and make sure the result is an integer.
          if (numberTwo !== 0) {
              if(numberOne % numberTwo === 0){
                  question = `${numberOne} / ${numberTwo} = ?`;
                  answer = numberOne / numberTwo;
              } else{
                  //If the division results in a fraction, just do addition instead.
                  question = `${numberOne} + ${numberTwo} = ?`;
                  answer = numberOne + numberTwo;
              }

          } else {
               //If division by zero, just do addition instead.
              question = `${numberOne} + ${numberTwo} = ?`;
              answer = numberOne + numberTwo;
          }
          break;
  }

  correctAnswer.push(answer);
  userAnswerArr.push(prompt(question));
  questions.push(question);
}

let correctCount = 0;
let wrongCount = 0;
let score = 0;

for (let i = 0; i < 10; i++) {
  if (document.getElementById(`question${i + 1}`)) {
      document.getElementById(`question${i + 1}`).innerHTML = questions[i];
  }
  if (document.getElementById(`answer${i + 1}`)) {
      document.getElementById(`answer${i + 1}`).innerHTML = "Your answer: " + userAnswerArr[i];
  }

  if (document.getElementById(`feedback${i + 1}`)) {
      if (parseInt(userAnswerArr[i]) === correctAnswer[i]) {
          document.getElementById(`feedback${i + 1}`).classList.add("correct");
          document.getElementById(`feedback${i + 1}`).innerHTML = " Correct!";
          correctCount++;
          score += 10;
      } else {
          document.getElementById(`feedback${i + 1}`).classList.add("incorrect");
          document.getElementById(`feedback${i + 1}`).innerHTML = " Incorrect! Correct answer: " + correctAnswer[i];
          wrongCount++;
      }
  }
}

if (document.getElementById("correctCount")) {
  document.getElementById("correctCount").innerHTML = correctCount;
}

if (document.getElementById("wrongCount")) {
  document.getElementById("wrongCount").innerHTML = wrongCount;
}

if (document.getElementById("score")) {
  document.getElementById("score").innerHTML = score;
}

if (score <= 20) {
  document.body.style.backgroundColor = "purple";
}