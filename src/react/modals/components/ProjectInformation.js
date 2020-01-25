/*
* David Shefcik 2020 
*/

/* Imports */
// Modules
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// CSS
import styles from "../css/ProjectInformation.css";

// Components
import Button from "../../pages/Home/components/Button";

/* Component */
const ProjectInformation = (props) => {

  const projectInformationQuery = gql`
{
  project(id: ${props.projectID}) {
    name
    description,
    technology
    repositoryURL
    liveURL
    authors {
      id
      name
      github
    }
  }
}  
`;
  const { loading, error, data } = useQuery(projectInformationQuery);

  if(loading) return <p className={styles.statusText}>Loading...</p>;
  if(error) return <p className={styles.statusText}>Something happened! Please try again.</p>;

  return (
    <div className={styles.container}>
      <p className={styles.description}>{data.project.description}</p>
      <div className={styles.listSection}>
        <p className={styles.sectionTitle}>Authors:</p>
        <hr className={styles.sectionLine} />
        <ul className={styles.sectionList}>
          {
            data.project.authors.map(author => {
              return (
                <li key={author.id}>
                  <a href={author.github} title={author.name} target="_blank">{author.name}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
      <div className={styles.listSection}>
        <p className={styles.sectionTitle}>Technology:</p>
        <hr className={styles.sectionLine} />
        <ul className={styles.sectionList}>
          {
            data.project.technology.map(tech => {
              return (
                <li key={tech}>
                  {tech}
                </li>
              );
            })
          }
        </ul>
      </div>
      <ul className={styles.buttonArea}>
        <li>
          <Button type="live" url={data.project.liveURL} />
        </li>
        <li>
          <Button type="repository" url={data.project.repositoryURL} />
        </li>
      </ul>
    </div>
  );
};

/* Export */
export default ProjectInformation;