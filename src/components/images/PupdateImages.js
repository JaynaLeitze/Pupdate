import React, { useState } from "react";

export const ImageContext = React.createContext;

export const PupdateImages = (props) => {
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files; //get the files that have been selected by the user
    const data = new FormData(); //
    data.append("file", files[0]); //get file that has been uploaded
    data.append("upload_preset", "pupdate"); // get the preset
    setLoading(true); //changing value from false to true
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/jayna/image/upload",

      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);

    setImage(file.secure_url);
    setLoading(false);
    return (
      <div className="pupdate_images">
        <h1>Upload Image</h1>
        <input
          type="file"
          name="file"
          placeholder="Upload an Image"
          onChange={uploadImage}
        />

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img src={image} style={{ width: "300px" }} />
        )}
      </div>
    );
  };

  return (
    <ImageContext.Provider
      value={{
        image,
        uploadImage,
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};
