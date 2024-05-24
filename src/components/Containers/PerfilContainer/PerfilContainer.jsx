import {React, useState, useEffect} from 'react';
import './PerfilContainer.css';
import Paisagem from '../../../assets/paisagem-natural.png';
import ProfileMold from '../../ImagemMold/ProfileMold'
import MenuHamburger from '../../MenuHamburguer/Menuburger';
import FileInput from '../../FileInput/FileInput';
import FileInputPerfil from '../../FileInput/FileInputPerfil';
import { HiMiniPlay } from 'react-icons/hi2';
import { alterarImagemPerfil } from '../../../ApiFunctions/UsuarioFunctions';

const PerfilContainer = ({userImage, nome, email}) => {

  const [size, setSize] = useState({ width: '150px', height: '150px' });

  const fetchAlterarImagemPerfil = async () => {
    try {
      const email = localStorage.getItem('userEmail')
      const imagem = localStorage.getItem('baseImagePerfil')
      if (!imagem) {
        window.alert('Nenhuma imagem foi selecionada.');
        return;
      }
      const imagemalterada = await alterarImagemPerfil(email, imagem)
      console.log(imagemalterada)
      console.log(email, imagem)
      window.location.reload();
    } catch (error) {
      window.alert("Erro ao alterar a imagem:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setSize({ width: '56px', height: '56px' });
      } else if (window.innerWidth <= 600) {
        setSize({ width: '100px', height: '100px' });
      } else if (window.innerWidth <= 900) {
        setSize({ width: '120px', height: '120px' });
      } else {
        setSize({ width: '150px', height: '150px' });
      }
    };

    handleResize();


    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <div className="box">
        <div className='hamMenu'>
            <div className="burgermenufeed"><MenuHamburger/></div>
        </div>
        <img src={Paisagem} alt="img paisagem" className='box-paisagem' />
        <div className="imageinputperfil">
          <FileInputPerfil/>
          <HiMiniPlay color="#575757" onClick={fetchAlterarImagemPerfil}/>
        </div>
        <div className="perfilImage">
          <ProfileMold width={size.width} height={size.height} userImage={userImage}/>
        </div>
            <div className="info-block">
              <p className="title">{nome}</p>
              <p className="text">{email}</p>
            </div>
          </div>
  );
};

export default PerfilContainer;