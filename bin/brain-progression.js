#!/usr/bin/env node
import { runGame } from '../src/game-engine.js';

const gameName = 'What number is missing in the progression?';
const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));
const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const progression = (beginNumber, step, count) => {
    const result = [beginNumber];
    const answer = [];
    const secret = getRandomArbitrary(0, count);
    let num = beginNumber;

    for (let i = 1; i < count; i += 1) {
      let sequenceSample = num + step;
      result.push(sequenceSample);
      num = sequenceSample;
    }

    answer[0] = result[secret];
    result[secret] = '..'; 
    answer[1] = result.join(' ');
    return answer;
  };

const progressions = [
    progression(getRandomNumber(100), getRandomArbitrary(1, 11), getRandomArbitrary(5, 11)),
    progression(getRandomNumber(100), getRandomArbitrary(1, 11), getRandomArbitrary(5, 11)),
    progression(getRandomNumber(100), getRandomArbitrary(1, 11), getRandomArbitrary(5, 11)),
];

const questions = [
    progressions[0][1],
    progressions[1][1],
    progressions[2][1],
];

const answers = [
    String(progressions[0][0]),
    String(progressions[1][0]),
    String(progressions[2][0]),
];

runGame(gameName, questions, answers);