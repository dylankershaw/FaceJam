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
      const impressions = action.payload.impressions;

      // runs if face and impressions are detected
      if (impressions && impressions[0]) {
        return impressions[0].average_emotion;
      } else {
        return state;
      }
    default:
      return state;
  }
}
