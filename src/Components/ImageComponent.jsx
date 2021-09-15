import React from "react";

function ImageComponent({ dynamicClassname, dynamicImageName }) {
  return (
    <div>
      {dynamicClassname === "" ? (
        ""
      ) : (
        <img className="dynamicImage" src={dynamicImageName} alt="Dynamic" />
      )}
    </div>
  );
}

export default ImageComponent;
