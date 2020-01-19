/*
* David Shefcik 2020
*/

/* Imports */
// Pages
import Links from "../../../../values/Links";

/* Function */
const run = (args) => {
  let output = "Available pages: \n";

  for(let i = 0; i < Links.length; i++) {
    let endLine = "";
    if(i != Links.length - 1) {
      endLine = "\n";
    }
    output += " - " + Links[i]["name"] + endLine;
  }

  return output;
};

/* Export */
export default run;