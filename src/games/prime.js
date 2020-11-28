import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxGameRounds = 3;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const makeQuestionAnswerPair = () => {
  const questionAnswerPair = [];
  const question = getRandomNumberBetween(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  questionAnswerPair.push(question);
  questionAnswerPair.push(answer);

  return questionAnswerPair;
};

export default () => gameEngine(gameRule, makeQuestionAnswerPair, maxGameRounds);
