/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

// CSS
import styles from "./css/PageTitle.css";

/* Component */
class PageTitle extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <p>{this.props.title}</p>
        <hr className={styles.line} />
      </div>
    );
  }
}

/* Export */
export default PageTitle;