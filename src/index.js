#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

console.log(chalk.bgCyan("hello world"));
await askName();
await questionOne();
// await winner();

// function welcome() {
//   const msg = `Welcome to this quiz!!`;
//   figlet(msg, (err, data) => {
//     console.log(gradient.pastel.multiline(data));
//   });
// }

async function askName() {
  let playerName;
  const name = await inquirer.prompt({
    name: "playerName",
    type: "input",
    message: "What's your name?",
  });
  playerName = name.playerName;
}

async function questionOne() {
  await inquirer.prompt({
    name: "Q1",
    type: "list",
    message: `What is the rarest M&M color?\n`,
    choices: ["red", "green", "brown", "pink"],
  });
  return answers.questionOne == "brown";
}

// function winner() {
//   console.clear();
//   const msg = `Well done. You made it!!`;
//   figlet(msg, (err, data) => {
//     console.log(gradient.pastel.multiline(data));
//   });
// }
