import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random-number-generator.js';

export const gcdGame = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

export const getGcdQuestionsAnswers = (countOfRounds = 3) => {
  const questionAnswerPairs = [];
  const questions = [];

  for (let i = 1; i <= countOfRounds; i += 1) {
    const firstNumber = getRandomNumberBetween(0, 100);
    const secondNumber = getRandomNumberBetween(0, 100);
    const question = () => `${firstNumber} ${secondNumber}`;

    questions.push(question());
    const currentQuestion = questions[i - 1];
    const pair = cons(currentQuestion, String(gcd(firstNumber, secondNumber)));
    questionAnswerPairs.push(pair);
  }

  return questionAnswerPairs;
};
