import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../game-engine.js';

const gameName = 'What number is missing in the progression?';

const makeProgression = (progressionBegin, progressionStep, progressionLength) => {
  const result = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    const progressionSample = progressionBegin + (progressionStep * (i - 1));
    result.push(progressionSample);
  }

  return result;
};

const getProgressionQuestionsAnswers = (countOfRounds = 3) => {
  const questionAnswerPairs = [];
  const questions = [];

  for (let i = 1; i <= countOfRounds; i += 1) {
    const progressionBegin = getRandomNumberBetween(0, 100);
    const progressionStep = getRandomNumberBetween(1, 11);
    const progressionLength = getRandomNumberBetween(5, 11);
    const question = makeProgression(progressionBegin, progressionStep, progressionLength);
    const indexOfUnknown = getRandomNumberBetween(0, question.length);

    question[indexOfUnknown] = '..';
    const positionOfUnknown = indexOfUnknown + 1;
    const unknownValue = progressionBegin + (progressionStep * (positionOfUnknown - 1));

    questions.push(question.join(' '));
    const currentQuestion = questions[i - 1];
    const pair = cons(currentQuestion, String(unknownValue));
    questionAnswerPairs.push(pair);
  }

  return questionAnswerPairs;
};

export default () => gameEngine(gameName, getProgressionQuestionsAnswers());
