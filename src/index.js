#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

console.log(chalk.bgCyan("hello world"));

// await askName();
await winner();

async function askName() {
  let playerName;
  const name = await inquirer.prompt({
    name: "playerName",
    type: "input",
    message: "What's your name?",
    default() {
      return "Player";
    },
  });
  playerName = name.playerName;
}

function winner() {
  console.clear();
  const msg = `Well done. You made it!!`;
  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}
