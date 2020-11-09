#!/usr/bin/env node
import { runGame } from '../src/game-engine.js';

const gameName = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const questions = [
  getRandomNumber(100), 
  getRandomNumber(100), 
  getRandomNumber(100),
];

const answers = [
  isEven(questions[0]),
  isEven(questions[1]),
  isEven(questions[2]),
];

runGame(gameName, questions, answers);