import { LEFT, HIDE } from "../actions/showBar.js";

let initState = {
  number: "-100%"
};

export default function change(state = initState, action) {
  switch (action.type) {
    case LEFT:
      return { number: "0" };
    case HIDE:
      return { number: "-100%" };
    default:
      return state;
  }
}
