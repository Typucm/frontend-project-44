import runGame from '../index.js';
import getRandomNumber from '../random.js';

const isEven = (number) => number % 2 === 0;

const ruls = 'Answer "yes" if the number is even, otherwise answer "no".';
const startEvemGame = () => {
  const ranNum = getRandomNumber(1, 100);
  const correctAnswer = isEven(ranNum) ? 'yes' : 'no';
  return [ranNum.toString(), correctAnswer];
};

export default () => runGame(ruls, startEvemGame);
