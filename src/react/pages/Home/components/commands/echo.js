/*
* David Shefcik 2020
*/

/* Function */
const run = (args) => {
  let textToSay = args["args"];
  if(textToSay === undefined) {
    return "";
  } else {
    let output = "";

    textToSay.forEach(text => {
      output += text["value"] + " ";
    });

    output = output.replace(/"/g, "").replace(/'/g, "").replace(/:/g, "");

    return output;
  }
};

/* Export */
export default run;