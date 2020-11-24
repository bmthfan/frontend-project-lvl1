import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../game-engine.js';

const gameRule = 'What is the result of the expression?';
const maxGameRounds = 3;
const operators = ['+', '-', '*'];

const getRandomOperator = () => operators[getRandomNumberBetween(0, 3)];

const makeExpression = (operator, operand1, operand2) => `${operand1} ${operator} ${operand2}`;

const getFirstOperand = (expression) => {
  const result = expression.split(' ');
  return Number(result[0]);
};

const getOperator = (expression) => {
  const result = expression.split(' ');
  return result[1];
};

const getSecondOperand = (expression) => {
  const result = expression.split(' ');
  return Number(result[2]);
};

const getResultOfExpression = (expression) => {
  const operator = getOperator(expression);
  const operand1 = getFirstOperand(expression);
  const operand2 = getSecondOperand(expression);
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error('Oops! Something went wrong, please try again.');
  }
};

const makeQuestionAnswerPairs = (countOfRounds) => {
  const result = [];

  for (let i = 1; i <= countOfRounds; i += 1) {
    const questionAnswerPair = [];
    const firstNumber = getRandomNumberBetween(0, 15);
    const secondNumber = getRandomNumberBetween(0, 15);
    const operator = getRandomOperator();
    const question = makeExpression(operator, firstNumber, secondNumber);
    const answer = getResultOfExpression(question);
    questionAnswerPair.push(question);
    questionAnswerPair.push(String(answer));
    result.push(questionAnswerPair);
  }

  return result;
};

export default () => gameEngine(gameRule, makeQuestionAnswerPairs(maxGameRounds), maxGameRounds);
