/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

// Pages
const HomePage = React.lazy(() => import("../pages/Home/index"));

/* Links */
const Links = [
  {
    name: "index",
    title: "David Shefcik",
    path: "/",
    component: HomePage
  }
];

/* Export */
export default Links;