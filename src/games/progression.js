import readlineSync, { question } from 'readline-sync';
import loopAndAnswer, { userName } from '../index.js';
import { randomNumber } from '../index.js';

const ruls = 'What number is missing in the progression?'
const arithmeticProgression = (start, step, length) => {
    const result = [];
    for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
    }
    return result;
    };
    const generateProgression = () => {
    const start = randomNumber(1, 50);
    const step = randomNumber(1, 5);
    const length = randomNumber(10, 20);
    const task = arithmeticProgression(start, step, length);
    const correctAnswer = task[length - 8];
    task[length - 8] = '..';
    const result = correctAnswer;
    return [task.join(' '), result];
    } 
    loopAndAnswer (ruls, generateProgression);

export default generateProgression