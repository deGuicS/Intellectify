import React, { useState } from 'react';
import { criarComentário } from '../../ApiFunctions/ComentariosFunctions';

const CommentBox = ({postId}) => {
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCommentChange = (event) => {
      setComment(event.target.value);
  };

  const fetchCriarComentario = async (postId, texto) => {
    try {
      const savedEmail = localStorage.getItem('userEmail');

      const postcriado = await criarComentário(savedEmail, postId, texto);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao criar comentário:", error);
    }
  };


  const handleSubmit = (event) => {
      event.preventDefault();
      setComment('');
      setIsSubmitted(true);
      const comentario = fetchCriarComentario(postId, comment)
  };

  return (
      <div>
          {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                  <label htmlFor="comment">Deixe seu comentário:</label>
                  <textarea
                      id="comment"
                      name="comment"
                      value={comment}
                      onChange={handleCommentChange}
                      rows="4"
                      cols="50"
                      placeholder="Escreva seu comentário aqui..."
                  />
                  <br />
                  <button type="submit">Enviar</button>
              </form>
          ) : (
              <p>Obrigado pelo seu comentário!</p>
          )}
      </div>
  );
};

export default CommentBox;