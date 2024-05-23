const azureUrl = "https://intellectifyapi.azurewebsites.net/api/";

// Função para pegar todos os posts + usuários atrelados aos posts 
export const pegarTodosPosts = async () => {
  try {
    const url = azureUrl + `post?SortBy=criado_em&IsDescending=true&PageSize=10`;
  
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!res.ok) {
      console.log("Post não encontrado!")
      throw new Error("Post não encontrado!");
    }
    
    const response = await res.json();
    return response;
  } catch (e) {
    throw e;
  }
}

export const pegarPostsPerfil = async (email) => {
  try {
    const url = azureUrl + `post/?nome=${email}`;
  
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!res.ok) {
      throw new Error("Post não encontrado!");
    }
    
    const response = await res.json();
  
    return response;
  } catch (e) {
    throw e;
  }
}

export const curtirPost = async (id, curtida) => {
  try {
    const url = azureUrl + `post/${id}`;
  
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({curtidas: parseInt(curtida)})
    });

    console.log(url)

    if (!res.ok) {
      throw new Error("Post não encontrado!");
    }
    
    const response = await res.json();
    console.log(curtida)
    console.log(response)
    return response
  } catch (e) {
    throw e;
  }
}

export const  criarPost = async (email, texto, imagem) => {
  try {
    const url = azureUrl + `post/${email}`;
  
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({texto: texto, imagem: imagem})
    });

    console.log(url)

    if (!res.ok) {
      throw new Error("Post não criado!");
    }
    
    const response = await res.json();
    return response
  } catch (e) {
    throw e;
  }
}

// 
