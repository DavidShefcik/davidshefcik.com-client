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
import pages from "./pages";
import goto from "./goto";
import projects from "./projects";
import terminal from "./terminal";

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
  },
  {
    name: "pages",
    usage: "pages",
    run: pages
  },
  {
    name: "goto",
    usage: "goto",
    run: goto
  },
  {
    name: "projects",
    usage: "projects",
    run: projects
  },
  {
    name: "terminal",
    usage: "terminal",
    run: terminal
  }
];

/* Export */
export default commandList;