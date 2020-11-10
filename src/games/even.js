#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { getRandomNumberBetween } from '../game-engine.js';

export const gameName = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

export const getQuestionAnswerPairs = (countOfRounds) => {
    const questionAnswerPairs = [];
    const questions = [];
            
    for (let i = 1; i <= countOfRounds; i += 1) {
        const question = () => getRandomNumberBetween(0, 100);
        questions.push(question());
        const currentQuestion = questions[i - 1];
        const pair = cons(currentQuestion, isEven(currentQuestion));
        questionAnswerPairs.push(pair);
    }

    return questionAnswerPairs;
};
