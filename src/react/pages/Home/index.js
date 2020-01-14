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

/* Component */
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Terminal />
      </div>
    );
  }
}

/* Export */
export default HomePage;