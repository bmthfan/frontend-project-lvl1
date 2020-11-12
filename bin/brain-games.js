#!/usr/bin/env node
import promptly from 'promptly';

(async () => {
    console.log('Welcome to the Brain Games!');
    const userName = await promptly.prompt('May I have your name?', { silent: true });
    console.log(`Hello, ${userName}!`);
})();