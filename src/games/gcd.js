import readlineSync from 'readline-sync';
import { userName } from '../index.js';
import { randomNumber } from '../index.js';
import loopAndAnswer from '../index.js';

const ruls = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
const gcd = (a, b) => {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};
const random = () => {
    const a = randomNumber(1, 100);
    const b = randomNumber(1, 100);
    const task = `${a} ${b}`;
    const correctAnswer = String(gcd(a, b))
    return [task, correctAnswer];
}
loopAndAnswer(ruls, random)
};
export default gcdGame;