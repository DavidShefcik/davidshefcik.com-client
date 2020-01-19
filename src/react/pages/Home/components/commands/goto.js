/*
* David Shefcik 2020
*/

/* Imports */
// Pages
import Links from "../../../../values/Links";

/* Function */
const run = (args) => {
  let page = args["args"];
  if(page === undefined) {
    return "No page given.";
  } else {
    let pageToGo = page[0]["value"];
    let url = "";

    Links.forEach(link => {
      if(pageToGo.toUpperCase() === link["name"].toUpperCase()) {
        url = link["path"];
      }
    });

    if(url === "") {
      return "Could not find the specified page.";
    } else {
      return "url:" + url;
    }
  }
};

/* Export */
export default run;