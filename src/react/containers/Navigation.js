/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from "react-redux";

// Links
import Links from "../values/Links";

// Fonts
import "./css/fonts/Roboto.css";
import "./css/fonts/RobotoLight.css";
import "./css/fonts/RobotoMono.css";

// CSS
import styles from "./css/App.css";

// Layout
import Header from "../layout/Header";
import MobileMenu from "../layout/MobileMenu";
import Footer from "../layout/Footer";

// Components
import Container from "./Container";

/* Component */
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: Links,
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
      <React.Fragment>
        <Router>
          <Header />
          <MobileMenu />
          <div className={`${styles.container} ${this.state.visible ? styles.visible : styles.hidden}`}>
            <div className={styles.content}>
              <Switch>
                <Container>
                  <React.Fragment>
                    {
                      this.state.pages.map((value, index) => {
                        return (
                          <div key={value.name}>
                            {
                              !value.path.includes("/#") ? (
                                <Route exact path={value.path}>
                                  <Suspense fallback={<p>Loading</p>}>
                                    {
                                      React.createElement(value.component)
                                    }
                                  </Suspense>
                                </Route>
                              ) : (
                                <span />
                              )
                            }
                          </div>
                        );
                      })
                    }
                  </React.Fragment>
                </Container>
              </Switch>
            </div>
          </div>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

/* Map state to props */
const mapStateToProps = state => {
  return {
    visible: state.mobileMenu.visible
  };
};

/* Exports */
export default connect(mapStateToProps)(Navigation);