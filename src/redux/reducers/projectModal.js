/*
* David Shefcik 2020
*/

/* Imports */
// Types
import { SET_PROJECT_MODAL, REMOVE_PROJECT_MODAL } from "../actions/types";

/* Initial state */
const initialState = {
  visible: false,
  project: {}
};

/* Eval */
const evaluate = (state = initialState, action) => {
  switch(action.type) {
  case SET_PROJECT_MODAL:
    return  {
      ...state,
      visible: true,
      project: action.payload
    };
  case REMOVE_PROJECT_MODAL:
    return {
      ...state,
      visible: false,
      project: {}
    };
  default:
    return state;
  }
};

/* Export */
export default evaluate;