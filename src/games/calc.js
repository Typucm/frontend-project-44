import readlineSync from 'readline-sync';
import loopAndAnswer, { userName } from '../index.js';
import { randomNumber } from '../index.js';

const ruls = 'What is the result of the expression?';

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
  const a = randomNumber(1, 10);
  const b = randomNumber(1, 10);
  const op = operatores[randomNumber(0, operatores.length)];
  const task = `${a} ${op} ${b}`;
  const correctAnswer = calculateExpr(a, b, op);
      return [task, correctAnswer];
    };
    loopAndAnswer(ruls, generateQuestion)

export default generateQuestion;

