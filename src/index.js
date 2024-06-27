
//функции которые часто используются

//рандомайзер
export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
//приветствие
import readlineSync from 'readline-sync';
export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
console.log('Hi, ' + userName + '!');

