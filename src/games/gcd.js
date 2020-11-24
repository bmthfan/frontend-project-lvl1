import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../game-engine.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const maxGameRounds = 3;

const displayTwoNumbers = (firstNumber, secondNumber) => `${firstNumber} ${secondNumber}`;

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const makeQuestionAnswerPairs = (countOfRounds) => {
  const result = [];

  for (let i = 1; i <= countOfRounds; i += 1) {
    const questionAnswerPair = [];
    const firstNumber = getRandomNumberBetween(0, 100);
    const secondNumber = getRandomNumberBetween(0, 100);
    const question = displayTwoNumbers(firstNumber, secondNumber);
    const answer = gcd(firstNumber, secondNumber);

    questionAnswerPair.push(question);
    questionAnswerPair.push(String(answer));
    result.push(questionAnswerPair);
  }

  return result;
};

export default () => gameEngine(gameRule, makeQuestionAnswerPairs(maxGameRounds), maxGameRounds);
