import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const maxGameRounds = 3;

const displayTwoNumbers = (firstNumber, secondNumber) => `${firstNumber} ${secondNumber}`;

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const makeQuestionAnswerPair = () => {
  const questionAnswerPair = [];
  const firstNumber = getRandomNumberBetween(0, 100);
  const secondNumber = getRandomNumberBetween(0, 100);
  const question = displayTwoNumbers(firstNumber, secondNumber);
  const answer = gcd(firstNumber, secondNumber);

  questionAnswerPair.push(question);
  questionAnswerPair.push(String(answer));

  return questionAnswerPair;
};

export default () => gameEngine(gameRule, makeQuestionAnswerPair, maxGameRounds);
