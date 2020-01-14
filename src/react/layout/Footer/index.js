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
      scrolled: false,
      colorChange: this.props.scrollColorChange,
      visible: this.props.visible
    };
  }
  componentDidMount() {
    if(this.state.colorChange) {
      window.addEventListener("scroll", this.handleScroll);
    }
  }
  componentWillUnmount() {
    if(this.state.colorChange) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
  componentDidUpdate(prevProps) {
    if(prevProps.visible != this.props.visible) {
      this.setState({
        visible: this.props.visible
      });
    }
    if(prevProps.scrollColorChange != this.props.scrollColorChange) {
      if(this.props.scrollColorChange) {
        window.addEventListener("scroll", this.handleScroll);
      } else {
        window.removeEventListener("scroll", this.handleScroll);
        this.setState({
          scrolled: false
        });
      }
      this.setState({
        scrollColorChange: this.props.scrollColorChange
      });
    }
  }
  handleScroll = () => {
    let doc = document.documentElement;
    let topScroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if(topScroll >= 50) {
      if(!this.state.scrolled) {
        this.setState({
          scrolled: true
        });
      }
    } else {
      if(this.state.scrolled) {
        this.setState({
          scrolled: false
        });
      }
    }
  }
  render() {
    return (
      <div className={`${styles.footer} ${this.state.colorChange && this.state.scrolled ? styles.scrolled : styles.default} ${this.state.visible ? styles.visible : styles.hidden}`}>
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