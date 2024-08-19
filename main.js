#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.Sentence.trim().split(" ");
// print the array of words to the console 
console.log(chalk.bgWhite(words));
// print the word count of the sentense to the console 
console.log(chalk.greenBright(`Your Sentence word count is ${words.length}`));
