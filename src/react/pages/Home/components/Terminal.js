/*
* David Shefcik 2020
*/

/* Modules */
// Imports
import React from "react";

// CSS
import styles from "../css/Terminal.css";

/* Component */
class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "Output",
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
      let newOutput = this.state.output + "\n" + this.commandInput.current.textContent;
      this.setState({
        output: newOutput
      });
      this.commandInput.current.textContent = null;
    }
  }
  terminalClick = () => {
    if(!this.state.mobile) {
      this.commandInput.current.focus();
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.terminalContent} onClick={this.terminalClick}>
          <div className={styles.outputSection}>
            {this.state.output}
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