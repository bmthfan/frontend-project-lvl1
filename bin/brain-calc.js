#!/usr/bin/env node
import { runGame } from '../src/game-engine.js';
import { cons, car, cdr } from '@hexlet/pairs';

const gameName = 'What is the result of the expression?';
const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));
const operators = ['+', '-', '*'];
const getOperator = () => operators[getRandomNumber(3)];
const pair1 = cons(getRandomNumber(15), getRandomNumber(15));
const pair2 = cons(getRandomNumber(15), getRandomNumber(15));
const pair3 = cons(getRandomNumber(15), getRandomNumber(15));

const questions = [
    `${car(pair1)} ${getOperator()} ${cdr(pair1)}`, 
    `${car(pair2)} ${getOperator()} ${cdr(pair2)}`, 
    `${car(pair3)} ${getOperator()} ${cdr(pair3)}`,
];

const answers = [
    String(eval(questions[0])), 
    String(eval(questions[1])), 
    String(eval(questions[2])),
];

runGame(gameName, questions, answers);