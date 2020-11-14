import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random-number-generator.js';

export const calcGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const getOperator = () => operators[getRandomNumberBetween(0, 3)];

export const getCalcQuestionsAnswers = (countOfRounds = 3) => {
  const questionAnswerPairs = [];
  const questions = [];

  for (let i = 1; i <= countOfRounds; i += 1) {
    const firstNumber = getRandomNumberBetween(0, 15);
    const secondNumber = getRandomNumberBetween(0, 15);
    const operator = getOperator();
    const question = () => `${firstNumber} ${operator} ${secondNumber}`;
    let answer;

    questions.push(question());
    switch (operator) {
      case '+':
        answer = firstNumber + secondNumber;
        break;
      case '-':
        answer = firstNumber - secondNumber;
        break;
      case '*':
        answer = firstNumber * secondNumber;
        break;
      default:
        break;
    }
    const currentQuestion = questions[i - 1];
    const pair = cons(currentQuestion, String(answer));
    questionAnswerPairs.push(pair);
  }

  return questionAnswerPairs;
};
