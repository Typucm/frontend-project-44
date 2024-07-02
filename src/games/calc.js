import readlineSync from 'readline-sync';
import loopAndAnswer  from '../index.js';
import { randomNumber } from '../index.js';

const ruls = 'What is the result of the expression?';

const operatores = ['+', '-', '*'];
const calculate = (a, b, op) => {
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
  const firstNumber = randomNumber(1, 10);
  const secondNumber = randomNumber(1, 10);
  const operator = operatores[randomNumber(0, operatores.length)];
  const task = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, secondNumber, operator);
      return [task, correctAnswer];
    };
    
export default () => loopAndAnswer(ruls, generateQuestion);