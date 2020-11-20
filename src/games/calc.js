import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../game-engine.js';

const gameName = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getOperator = (index) => operators[index];

const displayTwoOperandExpression = (operator, operand1, operand2) => `${operand1} ${operator} ${operand2}`;

const makeTwoOperandExpression = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return undefined;
  }
};

const getCalcQuestionsAnswers = (countOfRounds = 3) => {
  const questionAnswerPairs = [];
  const questions = [];

  for (let i = 1; i <= countOfRounds; i += 1) {
    const firstNumber = getRandomNumberBetween(0, 15);
    const secondNumber = getRandomNumberBetween(0, 15);
    const operator = getOperator(getRandomNumberBetween(0, 3));
    const question = displayTwoOperandExpression(operator, firstNumber, secondNumber);
    const answer = makeTwoOperandExpression(operator, firstNumber, secondNumber);

    questions.push(question);
    const currentQuestion = questions[i - 1];
    const pair = cons(currentQuestion, String(answer));
    questionAnswerPairs.push(pair);
  }

  return questionAnswerPairs;
};

export default () => gameEngine(gameName, getCalcQuestionsAnswers());
