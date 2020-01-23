/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faTimesCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

// CSS
import styles from "../css/Button.css";

/* Component */
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      url: this.props.url,
      linkValid: false,
      containerStyle: "",
      text: "Loading",
      icon: faSpinner
    };
  }
  componentDidMount() {
    let linkValid = false;
    let style = "";
    let text = "";
    let icon = faSpinner;
    if(this.state.url.length > 0) {
      linkValid = true;
    }
    if(this.state.type === "live") {
      if(linkValid) {
        style = styles.validLive;
        icon = faServer;
        text = "Live";
      } else {
        style = styles.invalidLive;
        icon = faTimesCircle;
        text = "Offline";
      }
    } else if(this.state.type === "repository") {
      if(linkValid) {
        style = styles.validRepo;
        icon = faGithubSquare;
        text = "Public";
      } else {
        style = styles.invalidRepo;
        icon = faTimesCircle;
        text = "Private";
      }
    }

    this.setState({
      linkValid: linkValid,
      containerStyle: style,
      text: text,
      icon: icon
    });
  }
  openLink = () => {
    if(this.state.linkValid) {
      window.open(this.state.url, "_blank");
    }
  }
  render() {
    return (
      <div onClick={this.openLink} className={`${styles.container} ${this.state.containerStyle}`}>
        <FontAwesomeIcon icon={this.state.icon} size="lg" className={styles.icon} />
        <p className={styles.text}>{this.state.text}</p>
      </div>
    );
  }
}

/* Export */
export default Button;