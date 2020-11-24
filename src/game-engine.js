import promptly from 'promptly';

export default async (gameRule, questionAnswerPairs, countOfRounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = await promptly.prompt('May I have your name?', { silent: true });
  console.log(`Hello, ${userName}!\n${gameRule}`);

  for (let i = 0; i < countOfRounds; i += 1) {
    const [question, correctAnswer] = questionAnswerPairs[i];
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
