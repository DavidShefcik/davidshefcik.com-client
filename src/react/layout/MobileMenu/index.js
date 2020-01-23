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
      colorChange: this.props.scrollColorChange,
      scrolled: false,
      links: Links.slice(1)
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

    // If scrolled down 75% of page or less than 50px
    if((topScroll / doc.clientHeight) * 100 >= 75 || topScroll < 50) {
      if(this.state.scrolled) {
        this.setState({
          scrolled: false
        });
      }
    } else if(topScroll >= 50) {
      if(!this.state.scrolled) {
        this.setState({
          scrolled: true
        });
      }
    }
  }
  render() {
    return (
      <div className={`${styles.container} ${this.state.colorChange && this.state.scrolled ? styles.scrolled : styles.default} ${this.state.visible ? styles.visible : styles.hidden}`}>
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
    visible: state.mobileMenu.visible,
    scrollColorChange: state.scrollColorChange.colorChange
  };
};

/* Export */
export default connect(mapStateToProps)(MobileMenu);