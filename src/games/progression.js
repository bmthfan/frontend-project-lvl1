#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { getRandomNumberBetween } from '../game-engine.js';

export const gameName = 'What number is missing in the progression?';

const getProgression = (progressionStep, progressionLength) => {
    const progressionBegin = getRandomNumberBetween(0, 100);
    const result = [];
    let num = progressionBegin;

    for (let i = 1; i <= progressionLength; i += 1) {
      let progressionSample = num + progressionStep;
      result.push(progressionSample);
      num = progressionSample;
    }

    return result;
  };

export const getQuestionAnswerPairs = (countOfRounds) => {
    const questionAnswerPairs = [];
    const questions = [];

    for (let i = 1; i <= countOfRounds; i += 1) {
        const question = getProgression(getRandomNumberBetween(1, 11), getRandomNumberBetween(7, 13));
        question[getRandomNumberBetween(1, question.length - 1)] = '..';
        const positionOfUnknown = question.indexOf('..');
        const unknownValue = Number(question[positionOfUnknown - 1] + question[positionOfUnknown + 1]) / 2;
        
        question.splice(0, 1);
        question.splice(-1, 1);
        questions.push(question.join(' '));
        const currentQuestion = questions[i - 1];
        const pair = cons(currentQuestion, unknownValue);
        questionAnswerPairs.push(pair);
    }

    return questionAnswerPairs;
};
