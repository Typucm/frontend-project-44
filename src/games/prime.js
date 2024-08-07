import runGame from '../index.js';
import getRandomNumber from '../random.js';

const ruls = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const startPrimeGame = () => {
  const task = getRandomNumber(1, 100);
  const correctAnswer = isPrimeNumber(task) ? 'yes' : 'no';
  return [task, correctAnswer];
};

export default () => runGame(ruls, startPrimeGame);
