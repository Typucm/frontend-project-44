import readlineSync from 'readline-sync';
import loopAndAnswer, { randomNumber } from '../index.js';
import { userName } from '../index.js';

const ruls = 'Answer "yes" if the number is even, otherwise answer "no".';
const start = () => {
  const ranNum = randomNumber(1, 100);
  const correctAnswer = ranNum % 2 === 0 ? 'yes' : 'no';
  const task = ranNum.toString();
    return [task, correctAnswer];
  };
  loopAndAnswer(ruls, start)

  export default start;
 