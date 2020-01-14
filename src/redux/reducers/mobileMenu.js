/*
* David Shefcik 2020
*/

/* Imports */
// Types
import { TOGGLE_MOBILE_MENU } from "../actions/types";

/* Initial state */
const initialState = {
  visible: false
};

/* Eval */
const evaluate = (state = initialState, action) => {
  switch(action.type) {
  case TOGGLE_MOBILE_MENU:
    return  {
      ...state,
      visible: action.payload
    };
  default:
    return state;
  }
};

/* Export */
export default evaluate;