import React from 'react';
import './PerfilContainer.css';
import Paisagem from '../../../assets/paisagem-natural.png';
import ProfileMold from '../../ImagemMold/ProfileMold'

const PerfilContainer = ({userImage, nome, email}) => {
  return (
      <div className="box">
        <img src={Paisagem} alt="img paisagem" className='box-paisagem' />
        <div className="perfilImage">
          <ProfileMold width={"150px"} height={"150px"} userImage={userImage}/>
        </div>
            <div className="info-block">
              <p className="title">{nome}</p>
              <p className="text">{email}</p>
            </div>
          </div>
  );
};

export default PerfilContainer;