import React, { useState } from 'react';
import './ImageIcon.css'
import { IoMdImage } from "react-icons/io";

const ImageIcon = ({name}) => {


  return (
      <div className="image-upload">
        <label htmlFor="image-upload">
          <IoMdImage color="#575757" className="upload-icon" />
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          name = {name}
        />
      </div>
  );
};

export default ImageIcon;