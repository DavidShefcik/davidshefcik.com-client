/*
* David Shefcik 2020
*/

/* Imports */
// Types
import { TOGGLE_SCROLL_COLOR_CHANGE } from "../actions/types";

/* Initial state */
const initialState = {
  colorChange: true
};

/* Eval */
const evaluate = (state = initialState, action) => {
  switch(action.type) {
  case TOGGLE_SCROLL_COLOR_CHANGE:
    return  {
      ...state,
      colorChange: action.payload
    };
  default:
    return state;
  }
};

/* Export */
export default evaluate;