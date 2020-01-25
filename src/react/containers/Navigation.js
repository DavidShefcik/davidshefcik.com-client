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
import { ApolloProvider } from "@apollo/react-hooks";

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
import ProjectModal from "../modals/ProjectModal";

// GraphQL
import client from "../../graphql/client";

// Components
import Container from "./Container";

/* Component */
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: Links,
      visible: this.props.visible,
      projectVisible: this.props.projectVisible
    };
    this.navDiv = React.createRef();
  }
  componentDidMount() {
    if(this.state.projectVisible) {
      this.addScrollFreeze();
    }
  }
  componentWillUnmount() {
    if(this.state.projectVisible) {
      this.removeScrollFreeze();
    }
  }
  addScrollFreeze = () => {
    let navDir = this.navDiv.current;
    let scrollY = window.scrollY;
    navDir.style.position = "fixed";
    navDir.style.top = `-${scrollY}px`;
  }
  removeScrollFreeze = () => {
    let navDir = this.navDiv.current;
    let scroll = navDir.style.top.replace(/-/g, "").replace("px", "");
    navDir.style.position = "";
    navDir.style.top = "";
    window.scrollTo(0, parseInt(scroll));
  }
  componentDidUpdate(prevProps) {
    if(prevProps.visible != this.props.visible) {
      this.setState({
        visible: this.props.visible
      });
    }
    if(prevProps.projectVisible != this.props.projectVisible) {
      if(this.props.projectVisible) {
        this.addScrollFreeze();
      } else {
        this.removeScrollFreeze();
      }

      this.setState({
        projectVisible: this.props.projectVisible
      });
    }
  }
  render() {
    return (
      <div>
        <Router>
          <ApolloProvider client={client}>
            <ProjectModal project={this.props.project} />
            <Header />
            <MobileMenu />
            <div ref={this.navDiv} className={`${styles.container} ${this.state.visible ? styles.visible : styles.hidden}`}>
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
          </ApolloProvider>
        </Router>
      </div>
    );
  }
}

/* Map state to props */
const mapStateToProps = state => {
  return {
    visible: state.mobileMenu.visible,
    projectVisible: state.projectModal.visible,
    project: state.projectModal.project
  };
};

/* Exports */
export default connect(mapStateToProps)(Navigation);