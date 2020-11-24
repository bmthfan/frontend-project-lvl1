import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../game-engine.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxGameRounds = 3;

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

const makeQuestionAnswerPairs = (countOfRounds) => {
  const result = [];

  for (let i = 1; i <= countOfRounds; i += 1) {
    const questionAnswerPair = [];
    const question = getRandomNumberBetween(0, 100);
    const answer = isEven(question) ? 'yes' : 'no';

    questionAnswerPair.push(question);
    questionAnswerPair.push(answer);
    result.push(questionAnswerPair);
  }

  return result;
};

export default () => gameEngine(gameRule, makeQuestionAnswerPairs(maxGameRounds), maxGameRounds);
