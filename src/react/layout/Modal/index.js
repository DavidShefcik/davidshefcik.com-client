/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "./css/Modal.css";

/* Component */
class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  close = () => {
    this.props.close();
  };
  render() {
    return (
      <div className={`${styles.modalContainer} ${this.props.visible ? (styles.visible) : (styles.hidden)}`}>
        <div className={styles.container}>
          <p className={styles.closeContainer} onClick={this.close}><span className={styles.close}>&times;</span></p>
          <div className={styles.content}>
            <div className={styles.box}>
              <p className={styles.boxClose} onClick={this.props.close}>&times;</p>
              <div className={styles.boxContent}>{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* Map state to props */
const mapStateToProps = state => {
  return {
    visible: state.projectModal.visible,
  };
};

/* Export */
export default connect(mapStateToProps)(Modal);