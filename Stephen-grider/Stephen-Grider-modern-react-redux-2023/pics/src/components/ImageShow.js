import React from "react";

const ImageShow = ({ image }) => {
  return (
    <div>
      <img src={image.src.small} alt={image.alt} />
    </div>
  );
};

export default ImageShow;
