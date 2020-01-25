/*
* David Shefcik 2020
*/

/* Imports */
// Types
import { SET_PROJECT_MODAL, REMOVE_PROJECT_MODAL } from "./types";

/* Actions */
// Set
export const setProjectModal = (project) => (dispatch) => {
  dispatch({
    type: SET_PROJECT_MODAL,
    payload: project
  });
};

// Remove
export const removeProjectModal = (project) => (dispatch) => {
  dispatch({
    type: REMOVE_PROJECT_MODAL,
    payload: project
  });
};