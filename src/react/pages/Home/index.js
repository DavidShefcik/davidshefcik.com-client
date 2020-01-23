/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

// CSS
import styles from "./css/HomePage.css";

// Components
import Terminal from "./components/Terminal";
import Projects from "./components/Projects";

/* Component */
class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.homePage}>
        <div id="projects">
          <Projects />
        </div>
      </div>
    );
  }
}

/* Export */
export default HomePage;