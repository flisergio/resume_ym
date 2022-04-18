import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function hamClickedReducer(
  state = initialState.hamClicked,
  action
) {
  switch (action.type) {
    case types.UPDATE_HAMCLICKED:
      return action.hamClicked;
    default:
      return state;
  }
}
