/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { connect } from "react-redux";

// Redux
import { toggleMenu } from "../../redux/actions/mobileMenu";
import { toggleScrollColorChange } from "../../redux/actions/scrollColorChange";

/* Component */
class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.checkColorChange();
  }
  componentDidUpdate(prevProps) {
    if(prevProps.location != this.props.location) {
      this.props.toggleMenu(false);
      this.checkColorChange();

      if(this.props.location.hash === "#projects") {
        document.getElementById("projects").scrollIntoView({
          behavior: "smooth"
        });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }
  checkColorChange = () => {
    if(this.props.location.pathname === "/") {
      this.props.toggleScrollColorChange(true);
    } else {
      this.props.toggleScrollColorChange(false);
    }
  }
  render() {
    return this.props.children;
  }
}

/* Export */
export default connect(null, {toggleMenu, toggleScrollColorChange})(Container);