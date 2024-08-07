import runGame from '../index.js';
import getRandomNumber from '../random.js';

const ruls = 'What number is missing in the progression?';
const arithmeticProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }
  return result;
};
const startProgressionGame = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(10, 20);
  const task = arithmeticProgression(start, step, length);
  const correctAnswer = task[length - 8];
  task[length - 8] = '..';
  const result = correctAnswer;
  return [task.join(' '), result];
};

export default () => runGame(ruls, startProgressionGame);
