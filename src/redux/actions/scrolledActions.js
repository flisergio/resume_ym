import * as types from "./actionTypes";

export function updateScrolled(scrolled) {
  return { type: types.UPDATE_SCROLLED, scrolled };
}
