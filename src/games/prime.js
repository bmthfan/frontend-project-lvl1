import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../game-engine.js';

const gameName = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getPrimeQuestionsAnswers = (countOfRounds = 3) => {
  const questionAnswerPairs = [];
  const questions = [];

  for (let i = 1; i <= countOfRounds; i += 1) {
    const question = getRandomNumberBetween(0, 100);

    questions.push(question);
    const currentQuestion = questions[i - 1];
    const answer = isPrime(currentQuestion) ? 'yes' : 'no';
    const pair = cons(currentQuestion, answer);
    questionAnswerPairs.push(pair);
  }

  return questionAnswerPairs;
};

export default () => gameEngine(gameName, getPrimeQuestionsAnswers());
