import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const makeQuestionAnswerPair = () => {
  const question = getRandomNumberBetween(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => gameEngine(gameRule, makeQuestionAnswerPair);
