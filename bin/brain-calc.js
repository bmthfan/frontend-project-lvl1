#!/usr/bin/env node
import promptly from 'promptly';
import { cons, car, cdr } from '@hexlet/pairs';

console.log('Welcome to the Brain Games!');

(async () => {
    const userName = await promptly.prompt('May I have your name?', { silent: true });
    console.log(`Hello, ${userName}!`);
    const randomizer = (max) => Math.floor(Math.random() * Math.floor(max));
    const operators = ['+', '-', '*'];
    const randomNumber = () => randomizer(15);
    const index = () => randomizer(3);
    const operator = () => operators[index()];
    const pair1 = cons(randomNumber(), randomNumber());
    const pair2 = cons(randomNumber(), randomNumber());
    const pair3 = cons(randomNumber(), randomNumber());
    const expressions = [
        `${car(pair1)} ${operator()} ${cdr(pair1)}`, 
        `${car(pair2)} ${operator()} ${cdr(pair2)}`, 
        `${car(pair3)} ${operator()} ${cdr(pair3)}`,
    ];
    const questions = [
        eval(expression[0]), 
        eval(expression[1]), 
        eval(expression[2]),
    ];

    console.log('What is the result of the expression?');
    for (let i = 0; i < questions.length;) {
        await (async () => {
            const userAnswer = await promptly.prompt(`Question: ${expressions[i]}`, { silent: true, default: '' });
            console.log('Your answer:', userAnswer);
            if (questions[i] === Number(userAnswer)) {
               console.log('Correct!');
              if (i > 1) {
                   console.log(`Congratulations, ${userName}!`);
               }
               i += 1;
          } else {
             console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${questions[i]}'. \nLet's try again, ${userName}!`);
                i = questions.length;
          }
         })();
    }

})();