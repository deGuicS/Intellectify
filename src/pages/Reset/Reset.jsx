import React from 'react'
import RootContainer from '../../components/RootContainer/RootContainer'
import FormContainer from '../../components/Form/FormContainer/FormContainer'
import Input from "../../components/Form/TextInput/TextInput.jsx"
import Button from "../../components/Form/Button/Button.jsx"
import {Link, useNavigate} from "react-router-dom"
import "./Reset.css"
import { resetarSenha } from "../../ApiFunctions/UsuarioFunctions"

const Reset = () => {

  const navigate = useNavigate();

  const handleReset = async () => {
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="novaSenha"]').value;
    const confirmarSenha = document.querySelector('input[name="confirmarSenha"]').value;

    if(senha !== confirmarSenha)
      {
        window.alert("A senha e sua confirmação devem ser iguais!")
      }
    else
    {
      try {
        // Chama a função para autenticar o usuário
        const senhaResetada = await resetarSenha(email, senha);
        // Se autenticação for bem-sucedida, redireciona para a página de feed
        navigate("/");
      } catch (error) {
        // Se houver erro na autenticação, trata o erro, como exibir uma mensagem para o usuário
        window.alert("Erro ao resetar senha, email não encontrado!");
        // Aqui você pode exibir uma mensagem de erro para o usuário informando que as credenciais estão incorretas
      }
    } 
  };

  return (
    <div>
        <RootContainer>
            <div className='pageContainer'>
                <FormContainer>
                    <h1 className="title">Esqueci minha senha</h1>
                    <p>Insira seu e-mail ou telefone ou nome de usuário para enviarmos um código para modificar sua senha</p>
                    <Input type="text" name="email" placeholder="Email"/>
                    <Input type="password" name="novaSenha" placeholder="Nova Senha"/>
                    <Input type="password" name="confirmarSenha" placeholder="Confirmar Senha"/>
                    <Button onClick={handleReset}>Alterar Senha</Button>
                </FormContainer>
            </div>
        </RootContainer>
    </div>
  )
}

export default Reset