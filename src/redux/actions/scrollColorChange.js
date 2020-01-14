/*
* David Shefcik 2020
*/

/* Imports */
// Types
import { TOGGLE_SCROLL_COLOR_CHANGE } from "./types";

/* Actions */
// Toggle
export const toggleScrollColorChange = (toggle) => (dispatch) => {
  dispatch({
    type: TOGGLE_SCROLL_COLOR_CHANGE,
    payload: toggle
  });
};