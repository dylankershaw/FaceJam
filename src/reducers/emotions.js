import { SET_EMOTIONS } from "../actions";

export default function(
  state = {
    anger: 0,
    disgust: 0,
    fear: 0,
    joy: 0,
    sadness: 0,
    surprise: 0
  },
  action
) {
  switch (action.type) {
    case SET_EMOTIONS:
      if (action.payload.impressions[0]) {
        return action.payload.impressions[0].average_emotion;
      } else {
        return state;
      }
    default:
      return state;
  }
}
