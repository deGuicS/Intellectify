import NavBar from '../../components/NavBar/NavBar'
import PostContainer from '../../components/Containers/PostContainer/PostContainer'
import NewsContainer from '../../components/Containers/NewsContainer/NewsContainer.jsx';
import logobranca from '../../assets/logo-intellectify-sem-fundo.png';
import PerfilContainer from '../../components/Containers/PerfilContainer/PerfilContainer.jsx';
import './Perfil.css'
import { pegarUsuario } from '../../ApiFunctions/UsuarioFunctions';
import perfilVazio from '../../assets/perfilVazio.png';
import { pegarPostsPerfil } from '../../ApiFunctions/PostFunctions.jsx';
import React, { useEffect, useState } from 'react';
import MenuHamburger from '../../components/MenuHamburguer/Menuburger.jsx';


const Perfil = () => {

  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const [postsPerfil, setPostsPerfil] = useState([]);

  useEffect(() => {
    // Recupera o email do localStorage quando o componente é montado
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setUserEmail(savedEmail);

      // Chama a função pegarUsuario para obter os dados do usuário
      const fetchUserData = async () => {
        try {
          const data = await pegarUsuario(savedEmail);
          setUserData(data);
        } catch (error) {
          console.error('Erro ao obter os dados do usuário:', error);
        }
      };
      fetchUserData();
      
      console.log(userData)

      // Chama a função pegarTodosPosts para obter os posts
      const fetchPostsData = async (savedEmail) => {
        try {
          const postsData = await pegarPostsPerfil(savedEmail);
          setPostsPerfil(postsData);
        } catch (error) {
          console.error("Erro ao buscar os posts:", error);
        }
      };
      fetchPostsData(savedEmail);
    }
  }, []);



  return (
    <div className="perfilBackgroundColor">
      <div className='hamMenu'>
        <div className="burgermenufeed"><MenuHamburger/></div>
      </div>
      <div className="perfilcont">
        <div className="perfilcolumn">
          <NavBar userImage={userData && userData.imagem || perfilVazio}/>
        </div>
        <div className="perfilmain-column">
          <div className="perfilpostContainerFeed">
            <PerfilContainer userImage={userData && userData.imagem || perfilVazio}/>
            {postsPerfil.map((post, index) => (
              <PostContainer
                key={index}
                userImageSrc={post.nome || perfilVazio}
                userName={post.usuarioEmail}
                postImageSrc={post.imagem}
                postDescription={post.texto}
                likes={post.curtidas}
                comments={post.comentarios}
                postID={post.id}
              />
            ))}
          </div>
        </div>
        <div className="perfilcolumn">
          <div className="perfilcolumn-dir">
            <NewsContainer />
            <img src={logobranca} alt="logo branca" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil
