import promptly from 'promptly';

const roundsCount = 3;

export default async (gameRule, getQuestionAnswerPair) => {
  console.log('Welcome to the Brain Games!');
  const userName = await promptly.prompt('May I have your name?', { silent: true });
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getQuestionAnswerPair();
    const userAnswer = await promptly.prompt(`Question: ${question}`, { silent: true, default: '' });

    console.log('Your answer:', userAnswer);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
