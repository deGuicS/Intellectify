const azureUrl = "https://intellectifyapi.azurewebsites.net/api/";

export const  criarComentário = async (email, postId, texto) => {
  try {
    const url = azureUrl + `comentario/${email},${postId}`;
  
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({texto: texto})
    });

    if (!res.ok) {
      throw new Error("Comentário não criado!");
    }
    
    const response = await res.json();
    return response
  } catch (e) {
    throw e;
  }
}