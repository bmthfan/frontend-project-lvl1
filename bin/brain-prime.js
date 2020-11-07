#!/usr/bin/env node
import promptly from 'promptly';
import { cons, car, cdr } from '@hexlet/pairs';

console.log('Welcome to the Brain Games!');

(async () => {
    const userName = await promptly.prompt('May I have your name?', { silent: true });
    console.log(`Hello, ${userName}!`);
    const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));
    const isPrime = (number) => {
        if (number < 2) {
          return 'no';
        }
      
        for (let i = 2; i <= number / 2; i += 1) {
          if (number % i === 0) {
            return 'no';
          }
        }
      
        return 'yes';
    };
    const questions = [
        getRandomNumber(100),
        getRandomNumber(100),
        getRandomNumber(100),
    ];
    const answers = [
        isPrime(questions[0]),
        isPrime(questions[1]),
        isPrime(questions[2]),
    ];

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < questions.length;) {
        await (async () => {
            const userAnswer = await promptly.prompt(`Question: ${questions[i]}`, { silent: true, default: '' });
            console.log('Your answer:', userAnswer);
            if (answers[i] === userAnswer) {
               console.log('Correct!');
              if (i > 1) {
                   console.log(`Congratulations, ${userName}!`);
               }
               i += 1;
          } else {
              console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answers[i]}'. \nLet's try again, ${userName}!`);
              i = questions.length;
            }
        })();
    }
})();