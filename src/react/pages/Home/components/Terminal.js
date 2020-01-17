/*
* David Shefcik 2020
*/

/* Modules */
// Imports
import React from "react";
import { Link } from "react-router-dom";

// CSS
import styles from "../css/Terminal.css";

// Commands
import CommandList from "./commands/List";

// Links
import Links from "../../../values/Links";

// Images
import terminalWelcomeImage from "../../../../public/images/terminal_welcome.png";

/* Component */
class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: [],
      mobile: false,
      links: Links.slice(1),
      about: "My main skills are Node.js and deployment using Amazon Web Services, as I have AWS developer certification. I enjoy learning new things, creating tools that will help make things easier for others, and playing guitar! My resume is available",
      aboutLink: <Link to="/resume" title="Resume">here</Link>
    };
    this.commandInput = React.createRef();
  }
  componentDidMount() {
    if(!this.state.mobile) {
      this.commandInput.current.focus();
    }
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

    if(commandInfo["cmd"] === "") {
      let output = this.state.output;
      output.push("");
      this.setState({
        output: output
      });
    } else {
      this.checkCommand(commandInfo);
    }
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
            <img src={terminalWelcomeImage} className={styles.terminalWelcomeImage} alt="" />
            <p className={styles.title}>Full Stack Website Developer</p>
            <ul className={styles.links}>
              {
                this.state.links.map((value, index) => {
                  return (
                    <li key={value.name} className={index % 2 != 0 ? styles.odd : ""}>
                      <Link to={value.path} title={value.title}>
                        {value.title}
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
            <div className={styles.aboutContainer}>
              <p className={styles.aboutTitle}>About Me</p>
              <p className={styles.aboutText}>{this.state.about} {this.state.aboutLink}!</p>
            </div>
            {
              this.state.output.map((value, index) => {
                return (
                  <div key={index + 1} className={styles.outputValueContainer}>
                    <div className={styles.outputValueContent}>
                      {value}
                    </div>
                  </div>
                );
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