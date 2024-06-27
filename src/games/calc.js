import readlineSync from 'readline-sync';
import { userName } from '../index.js';
import { randomNumber } from '../index.js';

const attempts = 3;
const ruls = 'What is the result of the expression?';
console.log(`${ruls}`);
const operatores = ['+', '-', '*'];
const calculateExpr = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};
const generateQuestion = () => {
  for ( let i = 0; i < attempts; i += 1) {
  const a = randomNumber(1, 10);
  const b = randomNumber(1, 10);
  const op = operatores[randomNumber(0, operatores.length)];
  const expr = `${a} ${op} ${b}`;
  console.log(`Question: ${expr}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = calculateExpr(a, b, op);
    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again`);
      return;
    }
}
  console.log(`Congratulations, ${userName}`);
};
console.log(generateQuestion());
