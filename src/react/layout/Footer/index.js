/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// CSS
import styles from "./css/Footer.css";

/* Component */
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible
    };
  }
  componentDidUpdate(prevProps) {
    if(prevProps.visible != this.props.visible) {
      this.setState({
        visible: this.props.visible
      });
    }
  }
  render() {
    return (
      <div className={`${styles.footer} ${this.state.visible ? styles.visible : styles.hidden}`}>
        <ul>
          <li>
            <a href="https://www.github.com/DavidShefcik" title="GitHub" target="_blank">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/davidshefcik/" title="LinkedIn" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

/* Map state to props */
const mapStateToProps = state => {
  return {
    visible: state.mobileMenu.visible,
    scrollColorChange: state.scrollColorChange.colorChange
  };
};

/* Export */
export default connect(mapStateToProps)(Footer);