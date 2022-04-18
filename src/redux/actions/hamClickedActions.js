import * as types from "./actionTypes";

export function updateHamClicked(hamClicked) {
  return { type: types.UPDATE_HAMCLICKED, hamClicked };
}
