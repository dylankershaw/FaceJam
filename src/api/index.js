import cloudinary from "cloudinary";

const headers = {
  app_id: process.env.KAIROS_APP_ID,
  app_key: process.env.KAIROS_APP_KEY,
  "Content-Type": "application/json"
};

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
  return fetch(`https://api.kairos.com/v2/media?source=${url}`, {
    headers: headers,
    method: "POST",
    body: JSON.stringify({ image: url })
  }).then(res => res.json());
}

export function emotionGetter(id) {
  return fetch(`https://api.kairos.com/v2/analytics/${id}`, {
    headers: headers
  }).then(res => res.json());
}
