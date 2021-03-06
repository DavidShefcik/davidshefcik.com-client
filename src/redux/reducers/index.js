/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import { combineReducers } from "redux";

// Reducers
import mobileMenu from "./mobileMenu";
import scrollColorChange from "./scrollColorChange";
import projectModal from "./projectModal";

/* Combine */
export default combineReducers({
  mobileMenu: mobileMenu,
  scrollColorChange: scrollColorChange,
  projectModal: projectModal
});