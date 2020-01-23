/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// CSS
import styles from "../css/Projects.css";

// Components
import Project from "./Project";

/* Query */
const projectsQuery = gql`
{
  projects {
    id
    name
    description
    repositoryURL
    liveURL
  }
}
`;

/* Component */
const Projects = () => {
  const { loading, error, data } = useQuery(projectsQuery);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.projectsTitle}>Projects</p>
        <hr className={styles.projectsLine} />
        {
          loading ? (
            <p className={styles.text}>Loading...</p>
          ) : error ? (
            <p className={styles.text}>Something happened! Please try again.</p>
          ) : (
            <ul className={styles.projectList}>
              {            
                data.projects.sort((a, b) => {
                  if(a["name"].toLowerCase() < b["name"].toLowerCase()) return -1;
                  if(a["name"].toLowerCase() > b["name"].toLowerCase()) return 1;
                  return 0;
                }).map(project => {
                  return (
                    <li key={project.id}>
                      <Project project={project} />
                    </li>
                  );
                })
              }
            </ul>
          )
        }
      </div>
    </div>);
};

/* Export */
export default Projects;