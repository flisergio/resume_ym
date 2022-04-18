import { combineReducers } from "redux";
import scrolled from "./scrolledReducer";
import hamClicked from "./hamClickedReducer";

const rootReducer = combineReducers({
    scrolled,
    hamClicked,
});

export default rootReducer;
