/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { connect } from "react-redux";

// Redux
import { toggleMenu } from "../../../../redux/actions/mobileMenu";

// CSS
import styles from "../css/MobileToggle.css";

// Components
import HamburgerMenu from "react-hamburger-menu";

/* Component */
class MobileToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: this.props.scrolled,
      open: this.props.visible
    };
  }
  componentDidUpdate(prevProps) {
    if(prevProps.scrolled != this.props.scrolled) {
      this.setState({
        scrolled: this.props.scrolled
      });
    }
    if(prevProps.visible != this.props.visible) {
      this.setState({
        open: this.props.visible
      });
    }
  }
  toggle = () => {
    if(this.state.open) {
      this.setState({
        open: false
      }, () => {
        this.props.toggleMenu(false);
      });
    } else {
      this.setState({
        open: true
      }, () => {
        this.props.toggleMenu(true);
      });
    }
  }
  render() {
    return (
      <div className={styles.container} onClick={this.toggle}>
        <HamburgerMenu 
          isOpen={this.state.open}
          menuClicked={this.toggle}
          width={30}
          height={20}
          strokeWidth={3}
          rotate={0}
          color={this.state.scrolled ? "#20C20E" : "black"}
          borderRadius={2}
          animationDuration={0.15}
        />
      </div>
    );
  }
}

/* Map state to props */
const mapStateToProps = state => {
  return {
    visible: state.mobileMenu.visible
  };
};

/* Export */
export default connect(mapStateToProps, { toggleMenu })(MobileToggle);