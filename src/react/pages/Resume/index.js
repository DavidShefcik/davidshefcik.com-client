/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { Link } from "react-router-dom";

// Components
import PageTitle from "../../layout/PageTitle"; 
import Box from "../../layout/Box";

// CSS
import styles from "./css/ResumePage.css";

/* Component */
class ResumePage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Resume" />
        <Box>
          <div className={styles.resume}>
            <p className={styles.name}>David Shefcik</p>
            <div className={styles.resumeContent}>
              <Link to="/" title="davidshefcik.com">davidshefcik.com</Link>
              <div className={styles.section}>
                <p className={styles.sectionTitle}>Skills</p>
                <ul className={styles.list}>
                  <li>
                    Front-end development with React.js and Redux.
                  </li>
                  <li>
                    Designing and implementing REST APIs and GraphQL APIs.
                  </li>
                  <li>
                    Creating backend services using ASP.NET Core and Node.js.
                  </li>
                  <li>
                    MySQL and NoSQL Databases.
                  </li>
                  <li>
                    Development of websites using Amazon Web Services.
                  </li>
                </ul>
              </div>
              <div className={styles.section}>
                <p className={styles.sectionTitle}>Experience</p>
                <div>
                  <p className={styles.note}>May 2019 - Present</p>
                  <p className={styles.title}><span className={styles.bold}>Code Ninjas, Naperville</span> - Lead Code Sensei</p>
                  <ul className={styles.list}>
                    <li>
                      Teaching kids ages 8 - 14 computer programming.
                    </li>
                    <li>
                      Leader for a curriculum change.
                    </li>
                    <li>
                      Implemented a system for keeping laptops clean of viruses without spending extra money.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className={styles.note}>September 2018 - October 2019</p>
                <p className={styles.title}><span className={styles.bold}>Neuqua Study, Naperville</span> - Lead Developer</p>
                <ul className={styles.list}>
                  <li>
                    Neuqua Study was a website where Neuqua Valley High School students could create and organize study groups and peer tutoring sessions.
                  </li>
                  <li>
                    Frontend built in React.js with Redux for storage.
                  </li>
                  <li>
                    Backend built in ASP.NET Core.
                  </li>
                </ul>
              </div>
              <div className={styles.section}>
                <p className={styles.sectionTitle}>Education</p>
                <p className={styles.note}>August 2016 - May 2020</p>
                <p className={styles.title}><span className={styles.bold}>Neuqua Valley High School, Naperville</span> - College Preparation</p>
                <p className={styles.text}>Attended Neuqua Valley High School for college preparation.</p>
              </div>
            </div>
          </div>
        </Box>
      </div>
    );
  }
}

/* Export */
export default ResumePage;