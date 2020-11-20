import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../game-engine.js';

const gameName = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

const getEvenQuestionsAnswers = (countOfRounds = 3) => {
  const questionAnswerPairs = [];
  const questions = [];

  for (let i = 1; i <= countOfRounds; i += 1) {
    const question = getRandomNumberBetween(0, 100);

    questions.push(question);
    const currentQuestion = questions[i - 1];
    const answer = isEven(currentQuestion) ? 'yes' : 'no';
    const pair = cons(currentQuestion, answer);
    questionAnswerPairs.push(pair);
  }

  return questionAnswerPairs;
};

export default () => gameEngine(gameName, getEvenQuestionsAnswers());
