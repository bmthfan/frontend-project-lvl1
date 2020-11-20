import promptly from 'promptly';
import { car, cdr } from '@hexlet/pairs';

export default async (gameName, questionsAnswers) => {
  const gameLength = questionsAnswers.length - 1;

  console.log('Welcome to the Brain Games!');
  const userName = await promptly.prompt('May I have your name?', { silent: true });
  console.log(`Hello, ${userName}!\n${gameName}`);

  for (let i = 0; i <= gameLength; i += 1) {
    const question = car(questionsAnswers[i]);
    const correctAnswer = cdr(questionsAnswers[i]);
    const userAnswer = await promptly.prompt(`Question: ${question}`, { silent: true, default: '' });

    console.log('Your answer:', userAnswer);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
