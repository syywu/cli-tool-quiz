#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

let playerName;
console.log(chalk.bgCyan("Hello World"));
await askName();
await questionOne();
await questionTwo();
await questionThree();
await questionFour();
await questionFive();
await questionSix();
await questionSeven();
await questionEight();
await questionNine();
await questionTen();

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

async function questionTwo() {
  const answers = await inquirer.prompt({
    name: "Q2",
    type: "list",
    message: `According to Greek mythology, who was the first woman on earth?\n`,
    choices: ["Athena", "Pandora", "Hera", "Angelia"],
  });
  return isCorrect(answers.Q2 === "Pandora");
}

async function questionThree() {
  const answers = await inquirer.prompt({
    name: "Q3",
    type: "list",
    message: `What country won the very first FIFA World Cup in 1930?\n`,
    choices: ["Brazil", "Argentina", "Italy", "Uruguay"],
  });
  return isCorrect(answers.Q3 === "Uruguay");
}

async function questionFour() {
  const answers = await inquirer.prompt({
    name: "Q4",
    type: "confirm",
    message: `Is ice denser than water?`,
  });
  return isCorrect(answers.Q4 === false);
}

async function questionFive() {
  const answers = await inquirer.prompt({
    name: "Q5",
    type: "list",
    message: `Which bone are babies born without?\n`,
    choices: ["patella", "clavicle", "coccyx", "sacrum"],
  });
  return isCorrect(answers.Q5 === "patella");
}

async function questionSix() {
  const answers = await inquirer.prompt({
    name: "Q6",
    type: "confirm",
    message: `Was Neil Armstrong the first man to travel into space?`,
  });
  return isCorrect(answers.Q6 === false);
}

async function questionSeven() {
  const answers = await inquirer.prompt({
    name: "Q7",
    type: "list",
    message: `Which of these is not one of the Green sisters?\n`,
    choices: ["rap", "pop", "blues", "classical"],
  });
  return isCorrect(answers.Q7 === "classical");
}

async function questionEight() {
  const answers = await inquirer.prompt({
    name: "Q8",
    type: "list",
    message: `What is the name of Joey's BarcaLounger?\n`,
    choices: ["Rosita", "Sofia", "Marita", "Rosalia"],
  });
  return isCorrect(answers.Q8 === "Rosita");
}

async function questionNine() {
  const answers = await inquirer.prompt({
    name: "Q9",
    type: "confirm",
    message: `Is Jill Green one of the Green sisters?`,
  });
  return isCorrect(answers.Q9 === true);
}

async function questionTen() {
  const answers = await inquirer.prompt({
    name: "Q10",
    type: "list",
    message: "What was the name of Chandler’s psycho roommate?\n",
    choices: ["Freddie", "Eddie", "Edward", "Frank"],
  });
  return isCorrect(answers.Q10 === "Eddie");
}

// function winner() {
//   console.clear();
//   const msg = `Well done. You made it!!`;
//   figlet(msg, (err, data) => {
//     console.log(gradient.pastel.multiline(data));
//   });
// }
