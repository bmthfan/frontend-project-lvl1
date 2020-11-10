import promptly from 'promptly';
import { car, cdr } from '@hexlet/pairs';

export const getRandomNumberBetween = (beginNumber, endNumber) => Math.floor(Math.random() * (endNumber - beginNumber) + beginNumber);

export const runGame = async (gameName, questionsAnswers) => {
    console.log('Welcome to the Brain Games!');
    const userName = await promptly.prompt('May I have your name?', { silent: true });
    console.log(`Hello, ${userName}!`);
    console.log(gameName);
    for (const questionAnswer of questionsAnswers) {
        const userAnswer = await promptly.prompt(`Question: ${car(questionAnswer)}`, { silent: true, default: '' });
        const wrongAnswer = `'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(questionAnswer)}'. \nLet's try again, ${userName}!`;
        const lastQuestion = questionsAnswers.length - 1;

        console.log('Your answer:', userAnswer);
        if (userAnswer === String(cdr(questionAnswer))) {
            console.log('Correct!');
            if (questionAnswer === questionsAnswers[lastQuestion]) {
                console.log(`Congratulations, ${userName}!`);
                break;
            }
        }
        if (userAnswer !== String(cdr(questionAnswer))) {
            console.log(wrongAnswer);
            break;
        }
    };
};
