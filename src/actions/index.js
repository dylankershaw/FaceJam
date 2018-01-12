import * as apiHelpers from "../api";

export const SET_EMOTIONS = "SET_EMOTIONS";
export const SET_SONG = "SET_SONG";

export function getEmotions(img) {
  return function(dispatch) {
    apiHelpers.cloudinaryUploader(img).then(resp => {
      apiHelpers
        .kairosPoster(resp.url)
        .then(json => apiHelpers.emotionGetter(json.id))
        .then(data => {
          return dispatch({
            type: SET_EMOTIONS,
            payload: data
          });
        });
    });
  };
}

export function setSong(song) {
  return function(dispatch) {
    return dispatch({
      type: SET_SONG,
      payload: song
    });
  };
}
