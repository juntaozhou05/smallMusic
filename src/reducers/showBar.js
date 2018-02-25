import { LEFT, HIDE } from "../actions/showBar.js";

let initState = "-100%";

export default function showBar(state = initState, action) {
  switch (action.type) {
    case LEFT:
      return 0;
    case HIDE:
      return "-80%";
    default:
      state;
  }
}
