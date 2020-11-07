#!/usr/bin/env node
import promptly from 'promptly';
import { cons, car, cdr } from '@hexlet/pairs';

console.log('Welcome to the Brain Games!');

(async () => {
    const userName = await promptly.prompt('May I have your name?', { silent: true });
    console.log(`Hello, ${userName}!`);
    const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));
    const getRandomArbitrary = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const progression = (beginNumber, step, count) => {
        const result = [beginNumber];
        const answer = [];
        const secret = getRandomArbitrary(0, count);
        let num = beginNumber;

        for (let i = 1; i < count; i += 1) {
          let sequenceSample = num + step;
          result.push(sequenceSample);
          num = sequenceSample;
        }

        answer[0] = result[secret];
        result[secret] = '..'; 
        answer[1] = result.join(' ');
        return answer;
      };
    const questions = [
        progression(getRandomNumber(100), getRandomArbitrary(1, 11), getRandomArbitrary(5, 11)),
        progression(getRandomNumber(100), getRandomArbitrary(1, 11), getRandomArbitrary(5, 11)),
        progression(getRandomNumber(100), getRandomArbitrary(1, 11), getRandomArbitrary(5, 11)),
    ];
    const answers = [
        questions[0],
        questions[1],
        questions[2],
    ];

    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < questions.length;) {
        await (async () => {
            const userAnswer = await promptly.prompt(`Question: ${questions[i][1]}`, { silent: true, default: '' });
            console.log('Your answer:', userAnswer);
            if (answers[i][0] === Number(userAnswer)) {
               console.log('Correct!');
              if (i > 1) {
                   console.log(`Congratulations, ${userName}!`);
               }
               i += 1;
          } else {
              console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answers[i][0]}'. \nLet's try again, ${userName}!`);
              i = questions.length;
            }
        })();
    }
})();