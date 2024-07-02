import readlineSync from 'readline-sync';
import { randomNumber } from '../index.js';
import loopAndAnswer from '../index.js';

const ruls = 'Find the greatest common divisor of given numbers.';

const getGcdGame = (a, b) => {
    if (b === 0) {
        return a;
    } else {
        return getGcdGame(b, a % b);
    }
};
const makeQuest = () => {
    const a = randomNumber(1, 100);
    const b = randomNumber(1, 100);
    const task = `${a} ${b}`;
    const correctAnswer = String(getGcdGame(a, b))
    return [task, correctAnswer];
}

export default () => loopAndAnswer(ruls, makeQuest)