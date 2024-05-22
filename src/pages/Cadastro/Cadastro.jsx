import "./Cadastro.css"
import FormContainer from "../../components/Form/FormContainer/FormContainer.jsx"
import Input from "../../components/Form/TextInput/TextInput.jsx"
import Button from "../../components/Form/Button/Button.jsx"
import { Link, useNavigate } from "react-router-dom"
import RootContainer from "../../components/RootContainer/RootContainer.jsx"
import { criarUsuario } from "../../ApiFunctions/UsuarioFunctions.jsx"

const Cadastro = () => {

  const navigate = useNavigate();

  const handleCadastro = async () => {
    const email = document.querySelector('input[name="email"]').value;
    const nome = document.querySelector('input[name="nome"]').value;
    const sobrenome = document.querySelector('input[name="sobrenome"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
    const confirmarSenha = document.querySelector('input[name="confirmarsenha"]').value;

    if(senha !== confirmarSenha)
      {
        window.alert("A senha e sua confirmação devem ser iguais!")
      }
    else
    {
      try {
        // Chama a função para autenticar o usuário
        const usuarioCriado = await criarUsuario(email, nome, sobrenome, senha);
        // Se autenticação for bem-sucedida, redireciona para a página de feed
        navigate("/");
      } catch (error) {
        // Se houver erro na autenticação, trata o erro, como exibir uma mensagem para o usuário
        window.alert("Erro ao cadastrar, algum dado deve estar incorreto!");  
        // Aqui você pode exibir uma mensagem de erro para o usuário informando que as credenciais estão incorretas
      }
    }
  };

  return (<div>
    <RootContainer>
      <div className="pageContainer">
        <FormContainer>
          <h1 id="title">Cadastro</h1>
          <div className="fullname">
            <Input type="text" name="nome" placeholder="Nome"/>
            <Input type="text" name="sobrenome" placeholder="Sobrenome"/>
          </div>
          <Input type="text" name="email" placeholder="Email"/>
          <Input type="password" name="senha" placeholder="Senha"/>
          <Input type="password" name="confirmarsenha" placeholder="Confirmar senha"/>
          <Button onClick={handleCadastro}>Registrar</Button>

        </FormContainer>
        <div className="logar">
          <FormContainer>
            <h1>Ja tem uma conta? <Link to="/" className="link">Logar!</Link></h1>
          </FormContainer>
        </div>
      </div>
    </RootContainer>
  </div>
  )
}

export default Cadastro


// <div className="general">
{/* <div className="container">
<h1>Cadastro</h1>
<input type="text" className="name" placeholder="Nome" />
<input type="text" className="name" placeholder="Sobrenome" />
<input type="text" className="others-inputs" placeholder="Email ou telefone" />
<input type="password" className="others-inputs" placeholder="Senha" />
<input type="password" className="others-inputs" placeholder="Confirmar senha" />
<button className="btn-register">Registrar</button>
<a className="linkTermo" href="#">
  <p className="termoscad">Com este registro, aceitas os nossos Termos, a Política de Privacidade e a Política de Cookies.</p>
</a>
</div>
<div className="account-CT">
<p>Ja tem conta? <a href="login.html">Faça Login</a></p>
</div>
</div> */}