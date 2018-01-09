import cloudinary from "cloudinary";

export function cloudinaryUploader(img) {
  return cloudinary.v2.uploader.unsigned_upload(
    img,
    "face-jam-unsigned",
    {
      cloud_name: "dkershaw"
    },
    function(error, result) {
      return result;
    }
  );
}

export function kairosPoster(url) {
  return fetch("http://api.kairos.com/detect", {
    headers: {
      app_id: "e8f3158e",
      app_key: "4ea59d811ef35b9d747f233d4ab6db11",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ image: url })
  }).then(res => res.json().then(json => console.log(json)));
}
