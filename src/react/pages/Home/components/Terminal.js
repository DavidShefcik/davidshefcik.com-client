/*
* David Shefcik 2020
*/

/* Modules */
// Imports
import React from "react";

// CSS
import styles from "../css/Terminal.css";

// Commands
import CommandList from "./commands/List";

/* Component */
class Terminal extends React.Component {
  ascii = [
    "<pre><code>            ____                 _      __       ",
    "          / __ \ ____ _ _   __ (_)____/ /        ",
    "         / / / // __ `/| | / // // __  /         ",
    "        / /_/ // /_/ / | |/ // // /_/ /          ",
    "      /_____/ \__,_/  |___//_/ \__,_/            ",
    "                                                 ",
    "          _____  __           ____       _  __   ",
    "        / ___/ / /_   ___   / __/_____ (_)/ /__  ",
    "        \__ \ / __ \ / _ \ / /_ / ___// // //_/  ",
    "       ___/ // / / //  __// __// /__ / // ,<     ",
    "      /____//_/ /_/ \___//_/   \___//_//_/|_|    </code></pre>"
  ]
  constructor(props) {
    super(props);
    let wrappedAscii = {__html: this.ascii};
    this.state = {
      output: [
      ],
      mobile: false
    };
    this.commandInput = React.createRef();
  }
  componentDidMount() {
    this.commandInput.current.focus();
  }
  commandInputKeyPress = (event) => {
    if(event.key.toUpperCase() != "ENTER") {
      if(this.commandInput.current.textContent.length > 128) {
        event.preventDefault();
      }
    } else {
      event.preventDefault();
      this.processCommand(this.commandInput.current.textContent);
    }
  }
  terminalClick = () => {
    if(!this.state.mobile) {
      this.commandInput.current.focus();
    }
  }
  processCommand = (command) => {
    let commandRan = command.replace(/\s+/g, " ");
    commandRan = commandRan.split(" ");
    
    let commandInfo = {
      cmd: commandRan[0]
    };

    if(commandRan.length > 1) {
      let args = commandRan.slice(1);
      let commandArgs = [];
      args.forEach(arg => {
        commandArgs.push({
          value: arg
        });
      });
      commandInfo["args"] = commandArgs;
    }

    this.checkCommand(commandInfo);
    this.commandInput.current.textContent = null;
  }
  checkCommand = (command) => {
    let getCmd;
    CommandList.forEach(cmd => {
      if(command["cmd"].toUpperCase() === cmd["usage"].toUpperCase() || cmd["alias"] != undefined && cmd["alias"].includes(command["cmd"].toLowerCase())) {
        getCmd = cmd;
      }
    });

    let output = this.state.output;
    if(getCmd != null) {
      let cmdResult = getCmd["run"];
      cmdResult = cmdResult(getCmd);
      output.push(cmdResult);
    } else {
      output.push(`Command '${command["cmd"].toLowerCase()}' could not be found.`);
    }
    this.setState({
      output: output
    });
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.terminalContent} onClick={this.terminalClick}>
          <div className={styles.outputSection}>
            {
              this.state.output.map((value, index) => {
                return <div key={index + 1}>{value}</div>;
              })
            }
          </div>
          <div className={styles.inputSection}>
            {
              !this.state.mobile ? (
                <div contentEditable="true" onKeyPress={this.commandInputKeyPress} className={styles.commandInput} ref={this.commandInput} maxLength={10} placeholder="Enter 'help' for a list of commands." />
              ) : (
                <p>Tap on the terminal for commands</p>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

/* Export */
export default Terminal;