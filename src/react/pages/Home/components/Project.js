/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { connect } from "react-redux";

// Redux
import { setProjectModal } from "../../../../redux/actions/projectModal";

// CSS
import styles from "../css/Project.css";

// Components
import Button from "../components/Button";

/* Component */
class Project extends React.Component {
  projectModal = () => {
    this.props.setProjectModal(this.props.project);
  }
  buttonAreaClick = (event) => {
    let clickedId = event.target.getAttribute("id");

    if(clickedId === "button") {
      this.projectModal();
    }
  }
  render() {
    return (
      <div className={styles.container} title={this.props.project.name.replace(/-/g, " ").toLowerCase()}>
        <div onClick={this.projectModal}>
          <p className={styles.name}>
            { this.props.project.name.replace(/-/g, " ").toLowerCase() }
          </p>
          <p className={styles.description}>
            { this.props.project.description }
          </p>
        </div>
        <div className={styles.buttonArea} onClick={this.buttonAreaClick}>
          <ul id="button">
            <li id="button">
              <Button id="button" type="live" url={this.props.project.liveURL} />
            </li>
            <li id="button">
              <Button id="button" type="repository" url={this.props.project.repositoryURL} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

/* Export */
export default connect(null, { setProjectModal })(Project);