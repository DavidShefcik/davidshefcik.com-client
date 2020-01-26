/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import { request } from "graphql-request";

/* Queries */
const projectsQuery = `
{
  projects {
    name
    description
    repositoryURL
  }
}`;

/* Function */
const run = async (args) => {
  return new Promise((resolve, reject) => {
    request(process.env.NODE_ENV === "development" ? ("http://192.168.1.69/api/graphql") : ("https://davidshefcik.com/api/graphql"), projectsQuery).then(data => {
      let output = "";
      let projects = data["projects"];

      for(let i = 0; i < projects.length; i++) {
        let endLine = "";
        if(i != projects.length - 1) {
          endLine = "\n";
        }

        let link = "<a href=" + projects[i]["repositoryURL"] + " title=" + projects[i]["name"] + " target=\"_blank\">";
        if(projects[i]["repositoryURL"] === "") {
          link = "";
        }

        output += "<p>" + link + projects[i]["name"] + "</a> = " + projects[i]["description"] + "</p>" + endLine;
      }

      resolve(output);
    }).catch(error => {
      reject("Could not complete query.");
    });
  });
};

/* Export */
export default run;