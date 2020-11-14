import promptly from 'promptly';
import { car, cdr } from '@hexlet/pairs';
import { calcGame, getCalcQuestionsAnswers } from './games/calc.js';
import { evenGame, getEvenQuestionsAnswers } from './games/even.js';
import { gcdGame, getGcdQuestionsAnswers } from './games/gcd.js';
import { primeGame, getPrimeQuestionsAnswers } from './games/prime.js';
import { progressionGame, getProgressionQuestionsAnswers } from './games/progression.js';

let questionsAnswers;
let gameName;

export default async (game) => {
  switch (game) {
    case 'calc':
      questionsAnswers = getCalcQuestionsAnswers();
      gameName = calcGame;
      break;
    case 'even':
      questionsAnswers = getEvenQuestionsAnswers();
      gameName = evenGame;
      break;
    case 'gcd':
      questionsAnswers = getGcdQuestionsAnswers();
      gameName = gcdGame;
      break;
    case 'prime':
      questionsAnswers = getPrimeQuestionsAnswers();
      gameName = primeGame;
      break;
    case 'progression':
      questionsAnswers = getProgressionQuestionsAnswers();
      gameName = progressionGame;
      break;
    default:
      break;
  }
  console.log('Welcome to the Brain Games!');
  const userName = await promptly.prompt('May I have your name?', { silent: true });
  console.log(`Hello, ${userName}!\n${gameName}`);

  for (let i = 0; i <= questionsAnswers.length; i += 1) {
    const questionAnswer = questionsAnswers[i];
    const userAnswer = await promptly.prompt(`Question: ${car(questionAnswer)}`, { silent: true, default: '' });

    console.log('Your answer:', userAnswer);
    if (userAnswer === cdr(questionAnswer)) {
      console.log('Correct!');
      if (i === questionsAnswers.length - 1) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
    }
    if (userAnswer !== cdr(questionAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(questionAnswer)}'. \nLet's try again, ${userName}!`);
      break;
    }
  }
};
