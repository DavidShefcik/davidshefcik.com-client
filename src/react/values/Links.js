/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

// Pages
const HomePage = React.lazy(() => import("../pages/Home"));
const ContactPage = React.lazy(() => import("../pages/Contact"));
const ResumePage = React.lazy(() => import("../pages/Resume"));

/* Links */
const Links = [
  {
    name: "index",
    title: "David Shefcik",
    path: "/",
    component: HomePage
  },
  {
    name: "projects",
    title: "Projects",
    path: "/#projects",
    component: null
  },
  {
    name: "resume",
    title: "Resume",
    path: "/resume",
    component: ResumePage
  },
  {
    name: "contact",
    title: "Contact",
    path: "/contact",
    component: ContactPage
  }
];

/* Export */
export default Links;