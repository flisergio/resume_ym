import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function scrolledReducer(state = initialState.scrolled, action) {
  switch (action.type) {
    case types.UPDATE_SCROLLED:
      return action.scrolled;
    default:
      return state;
  }
}
