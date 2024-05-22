const azureUrl = "https://intellectifyapi.azurewebsites.net/api/";

export const autenticacaoUsuario = async (email, senha) => {
  try {
    const url = azureUrl + "usuario/autenticacaoUsuario";
  
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    if (!res.ok) {
      throw new Error("Email ou senha estão incorretos");
    }
    
    const usuarioEmail = await res.text();
  
    return usuarioEmail;
  } catch (e) {
    throw e;
  }
};



export const criarUsuario = async (email, nome, sobrenome, senha) => {
  try {
    const url = azureUrl + "usuario/";
  
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, nome, sobrenome, senha })
    });

    if (!res.ok) {
      throw new Error("Alguns dos dados enviados não estão corretos");
    }
    
    const usuarioCriado = await res.text();
  
    return usuarioCriado;
  } catch (e) {
    throw e;
  }
};

export const resetarSenha = async (email, senha) => {
  try {
    const url = azureUrl + "usuario/resetSenha";
  
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    if (!res.ok) {
      throw new Error("Email não encontrado!");
    }
    
    const response = await res.text();
  
    return response;
  } catch (e) {
    throw e;
  }
};

export const pegarUsuario = async (email) => {
  try {
    const url = azureUrl + `usuario/${email}`;
  
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!res.ok) {
      throw new Error("Email não encontrado!");
    }
    
    const response = await res.json();
  
    return response;
  } catch (e) {
    throw e;
  }
};