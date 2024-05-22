import "./RankContainer.css"

const RankContainer = ({imagem, titulo, textoAcima, textoAbaixo}) => {
  return (
    <div class="caixa"> 
        <img src={imagem} alt="" />
            <div class="info">
                <div class="titulo">{titulo}</div>
            </div>
        <div class="texto">
            <h1>{textoAcima}</h1>
            <h1 className='qntCursos'>{textoAbaixo}</h1>
        </div>
    </div>
  )
}

export default RankContainer