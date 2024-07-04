import runGame from '../index.js';
import getRandomNumber from '../random.js';

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
      throw new Error(`Unknown operator: '${calculate}'!!!`);
  }
};

const startCalcGame = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operator = operatores[getRandomNumber(0, operatores.length)];
  const task = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, secondNumber, operator);
  return [task, correctAnswer];
};

export default () => runGame(ruls, startCalcGame);
