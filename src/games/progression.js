import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random-number-generator.js';

export const progressionGame = 'What number is missing in the progression?';

const makeProgression = (progressionBegin, progressionStep, progressionLength) => {
  let beginNumber = progressionBegin;
  const result = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    const progressionSample = beginNumber + progressionStep;
    result.push(progressionSample);
    beginNumber = progressionSample;
  }

  return result;
};

export const getProgressionQuestionsAnswers = (countOfRounds = 3) => {
  const questionAnswerPairs = [];
  const questions = [];

  for (let i = 1; i <= countOfRounds; i += 1) {
    const question = makeProgression(
      getRandomNumberBetween(0, 100),
      getRandomNumberBetween(1, 11),
      getRandomNumberBetween(7, 13),
    );
    question[getRandomNumberBetween(1, question.length - 1)] = '..';
    const indexOfUnknown = question.indexOf('..');
    const unknownValue = String((question[indexOfUnknown - 1] + question[indexOfUnknown + 1]) / 2);

    question.splice(0, 1);
    question.splice(-1, 1);
    questions.push(question.join(' '));
    const currentQuestion = questions[i - 1];
    const pair = cons(currentQuestion, unknownValue);
    questionAnswerPairs.push(pair);
  }

  return questionAnswerPairs;
};
