import React from 'react';
import './PostMold.css'; // Certifique-se de ajustar o caminho conforme a estrutura do seu projeto

const PostMold = ({ src, alt }) => {
  return (
    <div className="post-mold">
      <div className="post-img">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default PostMold;