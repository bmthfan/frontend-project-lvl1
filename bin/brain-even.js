#!/usr/bin/env node
import greeting from '../src/cli.js';
import promptly from 'promptly';

console.log('Welcome to the Brain Games!');

(async () => {
    const userName = await promptly.prompt('May I have your name?', { silent: true });
    console.log(`Hello, ${userName}!`);
    const randomizer = (max) => Math.floor(Math.random() * Math.floor(max));
    const questions = [randomizer(100), randomizer(100), randomizer(100)];
    const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }

    return 'no';
};
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < questions.length;) {
        await (async () => {
          const userAnswer = await promptly.prompt(`Question: ${questions[i]}`, { silent: true, default: '' });
           console.log('Your answer:', userAnswer);
            if (isEven(questions[i]) === userAnswer) {
               console.log('Correct!');
              if (i > 1) {
                   console.log(`Congratulations, ${userName}!`);
               }
             i += 1;
          } else {
             console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(questions[i])}'. \nLet's try again, ${userName}!`);
                i = questions.length;
          }
         })();
    }
    })();