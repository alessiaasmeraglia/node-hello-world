//console.log("Hello World");
//console.log("Hello Boolean");
/* const args = process.argv.slice(2);

const message = args.join(" ");

console.log(message || "Hello Boolean"); */

import { cowsay, cowthink, moo } from "cowsayjs";
const phrases = [
  "Hello Boolean",
  "Sto imparando Node.js",
  "Node gira fuori dal browser",
  "Le mucche sanno programmare",
  "Perché JavaScript non va mai al mare? Perché teme le onde asincrone!"
];

const args = process.argv.slice(2);

const terminalMessage = args.join(" ");

const randomIndex = Math.floor(Math.random() * phrases.length);

const randomPhrase = phrases[randomIndex];

const finalMessage = terminalMessage || randomPhrase;

console.log(cowsay(finalMessage));