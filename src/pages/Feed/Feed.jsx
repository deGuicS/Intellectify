import React, { useEffect, useState } from 'react';
import './Feed.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import CreatePostContainer from '../../components/Containers/CreatePostContainer/CreatePostContainer.jsx';
import TextInput from '../../components/Form/TextInput/TextInput.jsx';
import PostContainer from '../../components/Containers/PostContainer/PostContainer.jsx';
import ImagemMold from '../../components/ImagemMold/ProfileMold.jsx';
import NewsContainer from '../../components/Containers/NewsContainer/NewsContainer.jsx';
import logobranca from '../../assets/logo-intellectify-sem-fundo.png';
import { pegarUsuario } from '../../ApiFunctions/UsuarioFunctions';
import perfilVazio from '../../assets/perfilVazio.png';
import { pegarTodosPosts } from '../../ApiFunctions/PostFunctions.jsx';
import MenuHamburger from '../../components/MenuHamburguer/Menuburger.jsx';
import ImageIcon from '../../components/Containers/CreatePostContainer/ImageIcon.jsx';
import CreateIcon from '../../components/Containers/CreatePostContainer/CreateIcon.jsx';


const Feed = () => {

  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);

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
      
      // Chama a função pegarTodosPosts para obter os posts
      const fetchPostsData = async () => {
        try {
          const postsData = await pegarTodosPosts();
          setPosts(postsData);
        } catch (error) {
          console.error("Erro ao buscar os posts:", error);
        }
      };
      fetchPostsData();
    }
  }, []);
  const handlePost = async () => {
    const textoPost = document.querySelector('input[name="textoPost"]').value;
    const imagemPost = document.querySelector('input[name="imagemPost"]').value;

    
    try {

      const novoPost = await autenticacaoUsuario(email, senha);


    } catch (error) {

      window.alert("Erro ao autenticar, usuário ou senha devem estar incorretos!");

    }
  };

  return (
    <div className="feedBackgroundColor">
      <div className='hamMenu'>
        <div className="burgermenufeed"><MenuHamburger/></div>
      </div>
      <div className="feedContainer">
        <div className="column">
          <NavBar userImage={userData && userData.imagem || perfilVazio}/>
        </div>
        <div className="main-column">
          <CreatePostContainer>   
            <ImagemMold userImage={userData && userData.imagem || perfilVazio}/>
            <div className="textin"><TextInput type="textarea" name="textoPost"/></div>
            <div className="image-icone">
              <ImageIcon name="imagemPost"/>
              <CreateIcon onClick={handlePost}/>
            </div>
          </CreatePostContainer>
          <div className="postContainerFeed">
          {posts.map((post, index) => (
              <PostContainer
                key={index}
                userImageSrc={post.nome || perfilVazio}
                userName={post.usuarioEmail}
                postImageSrc={post.imagem}
                postDescription={post.texto}
                likes={post.curtidas}
                comments={post.comentarios}
              />
            ))}
          </div>
        </div>
        <div className="column">
          <div className="column-dir">
            <NewsContainer />
            <img src={logobranca} alt="logo branca" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
