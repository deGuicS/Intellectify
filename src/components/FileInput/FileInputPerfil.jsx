import React, { useEffect, useState } from 'react';
import { IoMdImage } from "react-icons/io";
import { LiaUserEditSolid } from "react-icons/lia";
import { alterarImagemPerfil } from '../../ApiFunctions/UsuarioFunctions';

const FileInputPerfil = (name) => {
  const [baseImagePerfil, setBaseImagePerfil] = useState("");

  const uploadImagePerfil = async (e) => {  
    const file = e.target.files[0];
    const base64 = await convertBase64Perfil(file);
    localStorage.setItem('baseImagePerfil', base64);
    console.log("testando")
  };

  const convertBase64Perfil = (file) => {
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
  let showIcon = <LiaUserEditSolid color="#575757" className="upload-icon"/>

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
          uploadImagePerfil(e);
        }}
      />
    </div>
);
}

export default FileInputPerfil