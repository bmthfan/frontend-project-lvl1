#!/usr/bin/env node
import promptly from 'promptly';
import { cons, car, cdr } from '@hexlet/pairs';

console.log('Welcome to the Brain Games!');

(async () => {
    const userName = await promptly.prompt('May I have your name?', { silent: true });
    console.log(`Hello, ${userName}!`);
    const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));
    const operators = ['+', '-', '*'];
    const getOperator = () => operators[getRandomNumber(3)];
    const pair1 = cons(getRandomNumber(15), getRandomNumber(15));
    const pair2 = cons(getRandomNumber(15), getRandomNumber(15));
    const pair3 = cons(getRandomNumber(15), getRandomNumber(15));
    const questions = [
        `${car(pair1)} ${getOperator()} ${cdr(pair1)}`, 
        `${car(pair2)} ${getOperator()} ${cdr(pair2)}`, 
        `${car(pair3)} ${getOperator()} ${cdr(pair3)}`,
    ];
    const answers = [
        eval(questions[0]), 
        eval(questions[1]), 
        eval(questions[2]),
    ];

    console.log('What is the result of the expression?');
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