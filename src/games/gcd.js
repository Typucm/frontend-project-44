import runGame from '../index.js';
import randomNumber from '../random.js';

const ruls = 'Find the greatest common divisor of given numbers.';

const getGcdGame = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcdGame(b, a % b);
};
const makeGcdQuest = () => {
  const a = randomNumber(1, 100);
  const b = randomNumber(1, 100);
  const task = `${a} ${b}`;
  const correctAnswer = String(getGcdGame(a, b));
  return [task, correctAnswer];
};

export default () => runGame(ruls, makeGcdQuest);
