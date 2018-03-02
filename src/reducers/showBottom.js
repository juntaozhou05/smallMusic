import { SHOW1, HIDE1 } from "../actions/showBottom.js";

let initState = {
  numbers: "100%"
};

export default function change(state = initState, action) {
  switch (action.type) {
    case SHOW1:
      return { numbers: "0" };
    case HIDE1:
      return { numbers: "100%" };
    default:
      return state;
  }
}
