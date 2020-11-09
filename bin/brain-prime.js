#!/usr/bin/env node
import { runGame } from '../src/game-engine.js';

const gameName = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const isPrime = (number) => {
    if (number < 2) {
        return 'no';
    }

    for (let i = 2; i <= number / 2; i += 1) {
       if (number % i === 0) {
           return 'no';
        }
    }

    return 'yes';
};

const questions = [
    getRandomNumber(100),
    getRandomNumber(100),
    getRandomNumber(100),
];

const answers = [
    isPrime(questions[0]),
    isPrime(questions[1]),
    isPrime(questions[2]),
];

runGame(gameName, questions, answers);