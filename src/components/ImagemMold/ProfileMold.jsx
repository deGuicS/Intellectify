import "./ProfileMold.css"
import { Link, useActionData } from "react-router-dom"

const ImagemMold = ({ userImage, width, height }) => {

  const finalWidth = width || "56px"; 
  const finalHeight = height || "56px";

  return (
    <div className="round-image-container" style={{ width: finalWidth, height: finalHeight }}> {/* Usa a classe do container */}
      <div className="round-image">
        <Link to="/perfil"><img src={userImage} alt="imagem" /></Link>
      </div> 
    </div>
  );
}



export default ImagemMold