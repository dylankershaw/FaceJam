import * as apiHelpers from "../api";

export const SET_EMOTIONS = "SET_EMOTIONS";

export function getEmotions(img) {
  return function(dispatch) {
    apiHelpers.cloudinaryUploader(img).then(resp => {
      apiHelpers
        .kairosPoster(resp.secure_url)
        .then(json => apiHelpers.emotionGetter(json.id))
        .then(resp => {
          console.log(resp);
        });
    });
  };
}
