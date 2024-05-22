import "./NavBar.css"
import logo from '../../assets/logo.png';
import { GoHomeFill } from "react-icons/go";
import { MdOutlineBarChart } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import ProfileMold from "../ImagemMold/ProfileMold";
import { Link } from "react-router-dom"

const NavBar = ({userImage}) => {
  return (
    <div className="navbar-container">
        <div className="navbar-components"> 
        <Link to="/feed"><img src={logo} alt="Logo" className="logo"/></Link>
        </div>

        <div className="navbar-components"> 
          <Link to="/feed"><GoHomeFill className="icones"/></Link>
          <Link to="/feed"><h1>Página Inicial</h1></Link>
        </div>

        <div className="navbar-components"> 
          <Link to="/rankfacul"><MdOutlineBarChart className="icones"/></Link>
          <Link to="/rankfacul"><h1>Rank Universitário</h1></Link>
        </div>

        <div className="navbar-components"> 
          <Link to="/rankcurso"><MdOutlineMenuBook className="icones"/></Link>
          <Link to="/rankcurso"><h1>Cursos</h1> </Link>
        </div>

        <div className="navbar-components"> 
          <Link to="/perfil"><MdOutlinePerson className="icones"/></Link>
          <Link to="/perfil"><h1>Perfil</h1> </Link>
        </div>

        <div className="navbar-components">
          <div className="ImagePerfil"><ProfileMold userImage={userImage}/></div>
        </div>

        
    </div>
  )
}

export default NavBar

