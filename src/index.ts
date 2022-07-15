import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

let playerName: string;
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
endGame();

async function sleep(ms: number): Promise<number> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function isCorrect(correctAns: string | boolean): Promise<void> {
  const spinner = createSpinner("Loading").start();
  await sleep(1000);
  if (correctAns) {
    spinner.success({ text: `That's correct, ${playerName}` });
  } else {
    spinner.error({ text: `Wrong answer!!!` });
    process.exit(1);
  }
}

async function askName(): Promise<void> {
  const name = await inquirer.prompt({
    name: "playerName",
    type: "input",
    message: "What's your name?",
  });
  playerName = name.playerName;
}

async function questionOne(): Promise<void> {
  const answers = await inquirer.prompt({
    name: "Q1",
    type: "confirm",
    message: `Joey has 7 sisters.`,
  });
  return isCorrect(answers.Q1);
}

async function questionTwo(): Promise<void> {
  const answers = await inquirer.prompt({
    name: "Q2",
    type: "list",
    message: `Who was Monica and Rachel's grumpy downstairs neighbour??\n`,
    choices: ["Mr. Freckels", "Mr. Heckles", "Mr. Finkles", "Mr. Hinkles"],
  });
  return isCorrect(answers.Q2 === "Mr. Heckles");
}

async function questionThree(): Promise<void> {
  const answers = await inquirer.prompt({
    name: "Q3",
    type: "list",
    message: `Which wedding gift made Rachel walk out on Barry?\n`,
    choices: ["Curtains", "A gold plate", "Bed linens", "A gravy boat"],
  });
  return isCorrect(answers.Q3 === "A gravy boat");
}

async function questionFour(): Promise<void> {
  const answers = await inquirer.prompt({
    name: "Q4",
    type: "confirm",
    message: `Was Chandler's address in Yemen, 15 Yemen Road, Yemen?`,
  });
  return isCorrect(!answers.Q4);
}

async function questionFive(): Promise<void> {
  const answers = await inquirer.prompt({
    name: "Q5",
    type: "list",
    message: `Which of these characters was always played by the same actor/actress?\n`,
    choices: ["Carol", "Susan", "Ben", "Mindy"],
  });
  return isCorrect(answers.Q5 === "Susan");
}

async function questionSix(): Promise<void> {
  const answers = await inquirer.prompt({
    name: "Q6",
    type: "confirm",
    message: `Phoebe gets a soccer ball phone as a gift from her bank.`,
  });
  return isCorrect(!answers.Q6);
}

async function questionSeven(): Promise<void> {
  const answers = await inquirer.prompt({
    name: "Q7",
    type: "list",
    message: `Who did Phoebe think her grandfather was?\n`,
    choices: [
      "Stephen Hawking",
      "Issac Newton",
      "Albert Einstein",
      "Nikola Tesla",
    ],
  });
  return isCorrect(answers.Q7 === "Albert Einstein");
}

async function questionEight(): Promise<void> {
  const answers = await inquirer.prompt({
    name: "Q8",
    type: "list",
    message: `What is the name of Joey's BarcaLounger?\n`,
    choices: ["Rosita", "Sofia", "Marita", "Rosalia"],
  });
  return isCorrect(answers.Q8 === "Rosita");
}

async function questionNine(): Promise<void> {
  const answers = await inquirer.prompt({
    name: "Q9",
    type: "confirm",
    message: `Is Jill Green one of the Green sisters?`,
  });
  return isCorrect(answers.Q9);
}

async function questionTen(): Promise<void> {
  const answers = await inquirer.prompt({
    name: "Q10",
    type: "list",
    message: "What was the name of Chandler’s psycho roommate?\n",
    choices: ["Freddie", "Eddie", "Edward", "Frank"],
  });
  return isCorrect(answers.Q10 === "Eddie");
}

function endGame(): void {
  console.clear();
  figlet(
    `Congrats ${playerName}!\n
  You're a F.R.I.E.N.D.S fanatic!!`,
    (err, data) => {
      console.log(gradient.summer.multiline(data));
      process.exit(0);
    }
  );
}
