/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

// CSS
import styles from "./css/Box.css";

/* Component */
class Box extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

/* Export */
export default Box;