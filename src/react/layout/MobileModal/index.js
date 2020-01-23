/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

// CSS
import styles from "./css/MobileModal.css";

/* Component */
class MobileModal extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.box}>
            <p>Box</p>
          </div>
        </div>
      </div>
    );
  }
}

/* Export */
export default MobileModal;