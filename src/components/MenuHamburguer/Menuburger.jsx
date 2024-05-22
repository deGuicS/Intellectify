import { useState } from 'react';
import './Menuburger.css'; // Certifique-se de criar e importar o arquivo CSS
import { Link } from "react-router-dom"
import { GoHomeFill } from "react-icons/go";
import { MdOutlineBarChart } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="menu-links">
          <div className="unique-link">
            <Link to="/feed"><GoHomeFill className='menuIcons'/></Link>
            <Link to="/feed"><p>Página Inicial</p></Link>
          </div>
          <div className="unique-link">
            <Link to="/rankfacul"><MdOutlineBarChart className='menuIcons'/></Link>
            <Link to="/rankfacul"><p>Ranking Universitário</p></Link>
          </div>
          <div className="unique-link">
            <Link to="/rankcurso"><MdOutlineMenuBook className='menuIcons'/></Link>
            <Link to="/rankcurso"><p>Cursos</p></Link>
          </div>
          <div className="unique-link">
            <Link to="/perfil"><MdOutlinePerson className='menuIcons'/></Link>
            <Link to="/perfil"><p>Perfil</p></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuHamburger;