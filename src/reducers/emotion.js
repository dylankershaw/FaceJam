import { SET_EMOTIONS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case SET_EMOTIONS:
      return [];
    default:
      return state;
  }
}
