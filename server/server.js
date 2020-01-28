/*
* Daivd Shefcik 2020
*/

/* Imports */
// Modules
const express = require("express");
const path = require("path");

/* App */
// Init.
const app = express();

// Static
app.use(express.static(path.join(__dirname, "./dist")));

// Catch all
app.get("/*", (req, res) => {
  return res.sendFile(path.join(__dirname, "./dist/index.html"), (error) => {
    return res.status(500).send("Something happened!");
  });
});

// Listen
app.listen(80, () => {
  console.log("Server started!");
});
