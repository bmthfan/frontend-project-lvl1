#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';
import { runGame } from '../src/game-engine.js';

const gameName = 'Find the greatest common divisor of given numbers.';
const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));
const pair1 = cons(getRandomNumber(100), getRandomNumber(100));
const pair2 = cons(getRandomNumber(100), getRandomNumber(100));
const pair3 = cons(getRandomNumber(100), getRandomNumber(100));

const gcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }

    return gcd(num2, num1 % num2);
};

const questions = [
    `${car(pair1)} ${cdr(pair1)}`, 
    `${car(pair2)} ${cdr(pair2)}`, 
    `${car(pair3)} ${cdr(pair3)}`,
];

const answers = [
    String(gcd(car(pair1), cdr(pair1))),
    String(gcd(car(pair2), cdr(pair2))),
    String(gcd(car(pair3), cdr(pair3))),
];

runGame(gameName, questions, answers);