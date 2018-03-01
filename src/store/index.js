import { createStore } from "redux";
import { combineReducers } from "redux";
import showBar from "../reducers/showBar.js";
import showBottom from "../reducers/showBottom.js";

const appReducer = combineReducers({
  showBar,
  showBottom
});

const store = createStore(appReducer);
export default store;
