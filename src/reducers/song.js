import { SET_SONG } from "../actions";

export default function(state = "", action) {
  switch (action.type) {
    case SET_SONG:
      return "";
    default:
      return state;
  }
}
