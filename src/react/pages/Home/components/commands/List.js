/*
* David Shefcik 2020
*/

/* Imports */
// Functions
import help from "./help";
import sudo from "./sudo";
import ls from "./ls";
import cd from "./cd";
import clear from "./clear";
import about from "./about";
import echo from "./echo";

/* Command list */
const commandList = [
  {
    name: "sudo",
    usage: "sudo",
    run: sudo
  },
  {
    name: "ls",
    usage: "ls",
    run: ls
  },
  {
    name: "cd",
    usage: "cd",
    run: cd
  },
  {
    name: "clear",
    usage: "clear",
    run: clear
  },
  {
    name: "echo",
    usage: "echo",
    run: echo
  },
  {
    name: "help",
    usage: "help",
    run: help
  },
  {
    name: "about",
    usage: "about",
    run: about
  }
];

/* Export */
export default commandList;