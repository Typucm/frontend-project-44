import readlineSync from 'readline-sync';
import { randomNumber } from '../index.js';
import { userName } from '../index.js';

const start = () => {
const attempts = 3;
const ruls = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(`${ruls}`)
// цикл попыток
for (let i = 0; i < attempts; i += 1) {
  const ranNum = randomNumber(1, 100);
  console.log(`Question: ${ranNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = ranNum % 2 === 0 ? 'yes' : 'no';
  if (correctAnswer === userAnswer.toString()) {
    console.log('Correct!')
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}`);
    return;
  }
}
  console.log(`Congratulations, ${userName}`);
  }
  export default start;
  













/*console.log('Answer "yes" if the number is even, otherwise answer "no".')
console.log(randomNumber(1, 100));
const userAnswer = readlineSync.question('Your answer: ');
if (userAnswer === 'yes' && randomNumber % 2 === 0){
  console.log('Correct!');
} else if (userAnswer === 'no' && randomNumber % 2 === 0){
    console.log('Wrong!');
  } else if (userAnswer === 'yes' && randomNumber % 2 !== 0){
    console.log('Wrong!');
  } else if (userAnswer === 'no' && randomNumber % 2 !== 0){
    console.log('Correct!');
  } */
  