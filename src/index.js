#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

let playerName;
console.log(chalk.bgCyan("Hello World"));
await askName();
// await questionOne();
// await questionTwo();
// await questionThree();
// await questionFour();
// await questionFive();
// await questionSix();
// await questionSeven();
// await questionEight();
// await questionNine();
await questionTen();
endGame();

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function isCorrect(correctAns) {
  const spinner = createSpinner("Loading").start();
  await sleep(1000);
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
    type: "confirm",
    message: `Joey has 7 sisters.`,
  });
  return isCorrect(answers.Q1 === true);
}

async function questionTwo() {
  const answers = await inquirer.prompt({
    name: "Q2",
    type: "list",
    message: `Who was Monica and Rachel's grumpy downstairs neighbour??\n`,
    choices: ["Mr. Freckels", "Mr. Heckles", "Mr. Finkles", "Mr. Hinkles"],
  });
  return isCorrect(answers.Q2 === "Mr. Heckles");
}

async function questionThree() {
  const answers = await inquirer.prompt({
    name: "Q3",
    type: "list",
    message: `Which wedding gift made Rachel walk out on Barry?\n`,
    choices: ["Curtains", "A gold plate", "Bed linens", "A gravy boat"],
  });
  return isCorrect(answers.Q3 === "A gravy boat");
}

async function questionFour() {
  const answers = await inquirer.prompt({
    name: "Q4",
    type: "confirm",
    message: `Was Chandler's address in Yemen, 15 Yemen Road, Yemen?`,
  });
  return isCorrect(answers.Q4 === false);
}

async function questionFive() {
  const answers = await inquirer.prompt({
    name: "Q5",
    type: "list",
    message: `Which of these characters was always played by the same actor/actress?\n`,
    choices: ["Carol", "Susan", "Ben", "Mindy"],
  });
  return isCorrect(answers.Q5 === "Susan");
}

async function questionSix() {
  const answers = await inquirer.prompt({
    name: "Q6",
    type: "confirm",
    message: `Phoebe gets a soccer ball phone as a gift from her bank.`,
  });
  return isCorrect(answers.Q6 === false);
}

async function questionSeven() {
  const answers = await inquirer.prompt({
    name: "Q7",
    type: "list",
    message: `Who did Phoebe think her grandfather was?\n`,
    choices: [
      "Stephen Hawkins",
      "Issac Newton",
      "Albert Einstein",
      "Nikola Tesla",
    ],
  });
  return isCorrect(answers.Q7 === "Albert Einstein");
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

function endGame() {
  console.clear();
  const msg = `Congrats ${playerName}!\n
   You're a F.R.I.E.N.D.S fanatic!!`;
  figlet(msg, (err, data) => {
    console.log(gradient.summer.multiline(data));
    process.exit(0);
  });
}
