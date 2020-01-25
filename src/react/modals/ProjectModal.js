/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { connect } from "react-redux";

// Redix
import { removeProjectModal } from "../../redux/actions/projectModal";

// CSS
import styles from "./css/ProjectModal.css";

// Components
import Modal from "../layout/Modal";
import ProjectInformation from "./components/ProjectInformation";

/* Component */
class ProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
  }
  componentDidUpdate(prevProps) {
    if(this.props.project != prevProps.project) {
      this.setState({
        project: this.props.project
      });
    }
  }
  close = () => {
    this.props.removeProjectModal();
  }
  render() {
    return (
      <Modal name="project" close={this.close}>
        {
          this.state.project.name != undefined ? (
            <React.Fragment>
              <p className={styles.name}>{this.state.project.name.replace(/-/g, " ").toLowerCase()}</p>
              <hr className={styles.line} />
              <ProjectInformation projectID={this.state.project.id} />
            </React.Fragment>
          ) : (
            <p className={styles.name}>Could not get project information! Please try again.</p>
          )
        }
      </Modal>
    );
  }
}

/* Map state to props */
const mapStateToProps = state => {
  return {
    project: state.projectModal.project
  };
};

/* Export */
export default connect(mapStateToProps, { removeProjectModal })(ProjectModal);