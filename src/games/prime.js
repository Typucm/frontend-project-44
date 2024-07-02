import readlineSync from 'readline-sync';
import loopAndAnswer, { randomNumber } from '../index.js';
import { userName } from '../index.js';

const ruls = 'Answer "yes" if the number is even, otherwise answer "no".';
const isPrime = (num) => {
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
    const correctAnswer = isPrime(task) ? 'yes' : 'no';
    return [task, correctAnswer];
}
loopAndAnswer(ruls, getRandomPrime);
export default isPrime;