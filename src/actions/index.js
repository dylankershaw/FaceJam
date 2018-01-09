import cloudinary from "cloudinary";
export const SET_EMOTIONS = "SET_EMOTIONS";

export function getEmotions(img) {
  return function(dispatch) {
    cloudinary.v2.uploader.unsigned_upload(
      img,
      "face-jam-unsigned",
      {
        cloud_name: "dkershaw"
      },
      function(error, result) {
        console.log(result);
      }
    );
  };
}
