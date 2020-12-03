import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../index.js';

const gameRule = 'What number is missing in the progression?';

const makeProgression = (progressionBegin, progressionStep, progressionLength) => {
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    result.push(progressionBegin + progressionStep * i);
  }

  return result;
};

const makeQuestionAnswerPair = () => {
  const progressionBegin = getRandomNumberBetween(0, 100);
  const progressionStep = getRandomNumberBetween(1, 11);
  const progressionLength = getRandomNumberBetween(5, 11);
  const progression = makeProgression(progressionBegin, progressionStep, progressionLength);
  const indexOfUnknown = getRandomNumberBetween(0, progression.length);
  const answer = progression[indexOfUnknown];

  progression[indexOfUnknown] = '..';
  const question = progression.join(' ');

  return [question, String(answer)];
};

export default () => gameEngine(gameRule, makeQuestionAnswerPair);
