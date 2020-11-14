import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random-number-generator.js';

export const evenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

export const getEvenQuestionsAnswers = (countOfRounds = 3) => {
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
