import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const makeQuestionAnswerPair = () => {
  const firstNumber = getRandomNumberBetween(0, 100);
  const secondNumber = getRandomNumberBetween(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcd(firstNumber, secondNumber);

  return [question, String(answer)];
};

export default () => gameEngine(gameRule, makeQuestionAnswerPair);
