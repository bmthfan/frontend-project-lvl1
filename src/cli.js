import promptly from 'promptly';

export default async () => {
    const name = await promptly.prompt('May I have your name?', { silent: true });
    console.log(`Hello, ${name}!`);
};
