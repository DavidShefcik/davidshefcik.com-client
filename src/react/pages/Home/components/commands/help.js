/*
* David Shefcik 2020
*/

/* Function */
const run = (args) => {
  let cmds = [
    {
      usage: "help",
      description: "Returns the list of commands that are available."
    },
    {
      usage: "about",
      description: "About me!"
    },
    {
      usage: "pages",
      description: "Returns a list of the pages you can visit."
    },
    {
      usage: "goto [page]",
      description: "Redirect to the specified page on this website."
    },
    {
      usage: "projects",
      description: "Returns a list of all my projects."
    },
    {
      usage: "terminal",
      description: "Returns a description about this terminal."
    }
  ];
  let output = "";
  
  for(let i = 0; i < cmds.length; i++) {
    let endLine = "";
    if(i != cmds.length - 1) {
      endLine = "\n";
    }
    output += cmds[i]["usage"] + " - " + cmds[i]["description"] + endLine;
  }

  return output;
};

/* Export */
export default run;