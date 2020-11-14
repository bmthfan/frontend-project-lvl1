import promptly from 'promptly';
import { cons, car, cdr } from '@hexlet/pairs';
import { calcGame, getCalcQuestionsAnswers } from './games/calc.js';
import { evenGame, getEvenQuestionsAnswers } from './games/even.js';
import { gcdGame, getGcdQuestionsAnswers } from './games/gcd.js';
import { primeGame, getPrimeQuestionsAnswers } from './games/prime.js';
import { progressionGame, getProgressionQuestionsAnswers } from './games/progression.js';

const makeBrainGame = (game) => {
  let questionsAnswers = '';
  let gameName = '';
  switch (game) {
    case 'brain-calc':
      questionsAnswers = getCalcQuestionsAnswers();
      gameName = calcGame;
      break;
    case 'brain-even':
      questionsAnswers = getEvenQuestionsAnswers();
      gameName = evenGame;
      break;
    case 'brain-gcd':
      questionsAnswers = getGcdQuestionsAnswers();
      gameName = gcdGame;
      break;
    case 'brain-prime':
      questionsAnswers = getPrimeQuestionsAnswers();
      gameName = primeGame;
      break;
    case 'brain-progression':
      questionsAnswers = getProgressionQuestionsAnswers();
      gameName = progressionGame;
      break;
    default:
  }

  return cons(gameName, questionsAnswers);
};
export default async (game) => {
  const gameName = car(makeBrainGame(game));
  const questionsAnswers = cdr(makeBrainGame(game));
  const gameLength = questionsAnswers.length;

  console.log('Welcome to the Brain Games!');
  const userName = await promptly.prompt('May I have your name?', { silent: true });
  console.log(`Hello, ${userName}!\n${gameName}`);

  for (let i = 0; i <= gameLength; i += 1) {
    const question = car(questionsAnswers[i]);
    const correctAnswer = cdr(questionsAnswers[i]);
    const userAnswer = await promptly.prompt(`Question: ${question}`, { silent: true, default: '' });

    console.log('Your answer:', userAnswer);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (i === gameLength - 1) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
    }
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      break;
    }
  }
};
