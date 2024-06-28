import readlineSync from 'readline-sync';
//функции которые часто используются

//рандомайзер
export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

//приветствие
export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
console.log('Hi, ' + userName + '!');

//цикл и ответы
const attempts = 3;
const loopAndAnswer = (ruls, taskAndAnswer) => {
  console.log(`${ruls}`);
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
  console.log(`Congratulations, ${userName}`);
};

export default loopAndAnswer;