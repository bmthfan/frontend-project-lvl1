import getRandomNumberBetween from '../random-number-generator.js';
import gameEngine from '../index.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperator = () => operators[getRandomNumberBetween(0, operators.length)];

const calculateExpression = (operator, operand1, operand2) => {
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

const makeQuestionAnswerPair = () => {
  const firstNumber = getRandomNumberBetween(0, 15);
  const secondNumber = getRandomNumberBetween(0, 15);
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculateExpression(operator, firstNumber, secondNumber);

  return [question, String(answer)];
};

export default () => gameEngine(gameRule, makeQuestionAnswerPair);
