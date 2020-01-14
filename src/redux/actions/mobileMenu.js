/*
* David Shefcik 2020
*/

/* Imports */
// Types
import { TOGGLE_MOBILE_MENU } from "./types";

/* Actions */
// Toggle
export const toggleMenu = (toggle) => (dispatch) => {
  dispatch({
    type: TOGGLE_MOBILE_MENU,
    payload: toggle
  });
};