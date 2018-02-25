import { createStore } from "redux";
import { combineReducers } from "redux";
import showBar from "../reducers/showBar.js";

const appReducer = combineReducers({
  showBar
});

const store = createStore(appReducer);
export default store;
