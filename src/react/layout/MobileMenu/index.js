/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Links
import Links from "../../values/Links";

// CSS
import styles from "./css/MobileMenu.css";

/* Component */
class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      links: Links.slice(1)
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
      <div className={`${styles.container} ${this.state.visible ? styles.visible : styles.hidden}`}>
        <ul>
          {
            this.state.links.map((value, index) => {
              return (
                <li key={value.name}>
                  <Link to={value.path} title={value.title}>
                    <p>{value.title}</p>
                  </Link>
                </li>
              );
            })
          }
        </ul>
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
export default connect(mapStateToProps)(MobileMenu);