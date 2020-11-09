import promptly from 'promptly';

export const runGame = async (gameName, questions, answers) => {
    console.log('Welcome to the Brain Games!');
    const userName = await promptly.prompt('May I have your name?', { silent: true });
    console.log(`Hello, ${userName}!`);
    (async () => {
    console.log(gameName);
    for (let i = 0; i < questions.length;) {
        await (async () => {
            const userAnswer = await promptly.prompt(`Question: ${questions[i]}`, { silent: true, default: '' });
            console.log('Your answer:', userAnswer);
            if (answers[i] === userAnswer) {
                console.log('Correct!');
                if (i > 1) {
                    console.log(`Congratulations, ${userName}!`);
                }
                i += 1;
            } else {
                console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answers[i]}'. \nLet's try again, ${userName}!`);
                i = questions.length;
            }
        })();
    }
})();
};