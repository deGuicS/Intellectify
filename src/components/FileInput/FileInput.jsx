import React, { useEffect, useState } from 'react';
import { IoMdImage } from "react-icons/io";
import { LiaUserEditSolid } from "react-icons/lia";

const FileInput = (name, local) => {
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    localStorage.setItem('baseImage', base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  let showIcon
  if(local === "Perfil")
    {
      showIcon = <LiaUserEditSolid color="#575757" className="upload-icon"/>
    }
    else{
      showIcon = <IoMdImage color="#575757" className="upload-icon" />
    }

  return (
    <div className="image-upload">
      <label htmlFor="image-upload">
        {showIcon}
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        name = {name}
        onChange={(e) => {
          uploadImage(e);
        }}
      />
    </div>
);
}

export default FileInput