import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../game-engine.js';

const gameName = 'Find the greatest common divisor of given numbers.';

const displayTwoNumbers = (firstNumber, secondNumber) => `${firstNumber} ${secondNumber}`;

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const getGcdQuestionsAnswers = (countOfRounds = 3) => {
  const questionAnswerPairs = [];
  const questions = [];

  for (let i = 1; i <= countOfRounds; i += 1) {
    const firstNumber = getRandomNumberBetween(0, 100);
    const secondNumber = getRandomNumberBetween(0, 100);
    const question = displayTwoNumbers(firstNumber, secondNumber);
    const answer = gcd(firstNumber, secondNumber);

    questions.push(question);
    const currentQuestion = questions[i - 1];
    const pair = cons(currentQuestion, String(answer));
    questionAnswerPairs.push(pair);
  }

  return questionAnswerPairs;
};

export default () => gameEngine(gameName, getGcdQuestionsAnswers());
