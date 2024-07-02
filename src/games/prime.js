import readlineSync from 'readline-sync';
import loopAndAnswer, { randomNumber } from '../index.js';

const ruls = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrimeNumber = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const getRandomPrime = () =>{
    const task = randomNumber(1, 100);
    const correctAnswer = isPrimeNumber(task) ? 'yes' : 'no';
    return [task, correctAnswer];
};

export default () => loopAndAnswer(ruls, getRandomPrime)