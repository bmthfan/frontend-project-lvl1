import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random-number-generator.js';

export const primeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

export const getPrimeQuestionsAnswers = (countOfRounds = 3) => {
  const questionAnswerPairs = [];
  const questions = [];

  for (let i = 1; i <= countOfRounds; i += 1) {
    const question = () => getRandomNumberBetween(0, 100);
    questions.push(question());
    const currentQuestion = questions[i - 1];
    const pair = cons(currentQuestion, isPrime(currentQuestion));
    questionAnswerPairs.push(pair);
  }

  return questionAnswerPairs;
};
