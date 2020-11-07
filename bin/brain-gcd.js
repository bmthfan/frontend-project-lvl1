#!/usr/bin/env node
import promptly from 'promptly';
import { cons, car, cdr } from '@hexlet/pairs';
console.log('Welcome to the Brain Games!');

(async () => {
    const userName = await promptly.prompt('May I have your name?', { silent: true });
    console.log(`Hello, ${userName}!`);
    const randomizer = (max) => Math.floor(Math.random() * Math.floor(max));
    const randomNumber = () => randomizer(100);
    const pair1 = cons(randomNumber(), randomNumber());
    const pair2 = cons(randomNumber(), randomNumber());
    const pair3 = cons(randomNumber(), randomNumber());
    const questions = [
        `${car(pair1)} ${cdr(pair1)}`, 
        `${car(pair2)} ${cdr(pair2)}`, 
        `${car(pair3)} ${cdr(pair3)}`,
    ];
    const gcd = (num1, num2) => {
        if (num2 === 0) {
          return num1;
        }

        return gcd(num2, num1 % num2);
    };
    const answers = [
        gcd(car(pair1), cdr(pair1)),
        gcd(car(pair2), cdr(pair2)),
        gcd(car(pair3), cdr(pair3)),
    ];

    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < questions.length;) {
        await (async () => {
            const userAnswer = await promptly.prompt(`Question: ${questions[i]}`, { silent: true, default: '' });
            console.log('Your answer:', userAnswer);
            if (answers[i] === Number(userAnswer)) {
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