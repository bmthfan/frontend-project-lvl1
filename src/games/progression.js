import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../index.js';

const gameRule = 'What number is missing in the progression?';
const maxGameRounds = 3;

const makeProgression = (progressionBegin, progressionStep, progressionLength) => {
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const progressionSample = progressionBegin + progressionStep * i;
    result.push(progressionSample);
  }

  return result;
};

const makeQuestionAnswerPair = () => {
  const questionAnswerPair = [];
  const progressionBegin = getRandomNumberBetween(0, 100);
  const progressionStep = getRandomNumberBetween(1, 11);
  const progressionLength = getRandomNumberBetween(5, 11);
  const question = makeProgression(progressionBegin, progressionStep, progressionLength);
  const indexOfUnknown = getRandomNumberBetween(0, question.length);
  const unknownValue = progressionBegin + progressionStep * indexOfUnknown;

  question[indexOfUnknown] = '..';
  const currentQuestion = question.join(' ');
  questionAnswerPair.push(currentQuestion);
  questionAnswerPair.push(String(unknownValue));

  return questionAnswerPair;
};

export default () => gameEngine(gameRule, makeQuestionAnswerPair, maxGameRounds);
