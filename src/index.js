#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

let playerName;
console.log(chalk.bgCyan("hello world"));
await askName();
await questionOne();

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function isCorrect(correctAns) {
  const spinner = createSpinner("Loading").start();
  await sleep(2000);
  if (correctAns) {
    spinner.success({ text: `That's correct, ${playerName}` });
  } else {
    spinner.error({ text: `Wrong answer!!!` });
    process.exit(1);
  }
}

async function askName() {
  const name = await inquirer.prompt({
    name: "playerName",
    type: "input",
    message: "What's your name?",
  });
  playerName = name.playerName;
}

async function questionOne() {
  const answers = await inquirer.prompt({
    name: "Q1",
    type: "list",
    message: `What is the rarest M&M color?\n`,
    choices: ["red", "green", "brown", "pink"],
  });
  return isCorrect(answers.Q1 === "brown");
}

// function winner() {
//   console.clear();
//   const msg = `Well done. You made it!!`;
//   figlet(msg, (err, data) => {
//     console.log(gradient.pastel.multiline(data));
//   });
// }
