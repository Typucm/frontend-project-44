import readlineSync from 'readline-sync';

export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

const attempts = 3;
const loopAndAnswer = (ruls, taskAndAnswer) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  console.log(ruls);
  for ( let i = 0; i < attempts; i += 1) {
  const [task, correctAnswer] = taskAndAnswer()
  console.log(`Question: ${task}`);
  const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again`);
      return ;
    }
}
  console.log(`Congratulations, ${userName}!`);
};

export default loopAndAnswer;