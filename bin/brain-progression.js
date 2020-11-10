#!/usr/bin/env node
import { runGame } from '../src/game-engine.js';
import { gameName, getQuestionAnswerPairs } from '../src/games/progression.js';

runGame(gameName, getQuestionAnswerPairs(3));