import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxGameRounds = 3;

const isEven = (num) => (num % 2 === 0);

const makeQuestionAnswerPair = () => {
  const questionAnswerPair = [];
  const question = getRandomNumberBetween(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  questionAnswerPair.push(question);
  questionAnswerPair.push(answer);

  return questionAnswerPair;
};

export default () => gameEngine(gameRule, makeQuestionAnswerPair, maxGameRounds);
