/*
* David Shefcik 2020
*/

/* Imports */
// Modules
const express = require("express");
const path = require("path");

/* Server */
// Init.
const app = express();

// Static
app.use(express.static(path.join(__dirname, "./dist")));

// Catch
app.get("/*", (req, res) => {
  return res.sendFile(path.join(__dirname, "./dist/index.html"), (error) => {
    if(error) {
      return res.status(500).send("Something happened!");
    }
  });
});

// Listen
app.listen(3000, () => {
  console.log("App started");
});