import React from 'react'
import './RankFacul.css'
import Usp from '../../assets/usp.png'
import Unicamp from '../../assets/unicamp.png'
import Unifesp from '../../assets/unifesp.png'
import Ufabc from '../../assets/ufabc.png'
import Ifsp from '../../assets/ifsp.png'
import RankContainer from '../../components/Containers/RankContainer/RankContainer'
import NavBar from '../../components/NavBar/NavBar'
import MenuHamburger from '../../components/MenuHamburguer/Menuburger.jsx';


const RankFacul = () => {

    return (
        <div className="background">
            <div className='hamMenu'>
                <div className="burgermenufeed"><MenuHamburger/></div>
            </div>
            <div className="rankContainer">
                <div className="navcolumn"><NavBar/></div>
                <div class="container-facul">
                    <div className="main-column22">
                        <RankContainer
                        imagem={Usp}
                        titulo={"USP - Universidade de São Paulo"}
                        textoAcima={"Quantidade de Cursos"}
                        textoAbaixo={"184 Cursos"}
                        />
                        <RankContainer
                        imagem={Unicamp}
                        titulo={"UNICAMP - Universidade Estadual de Campinas"}
                        textoAcima={"Quantidade de Cursos"}
                        textoAbaixo={"66 Cursos"}
                        />
                        <RankContainer
                        imagem={Unifesp}
                        titulo={"UNIFESP - Universidade Federal de São Paulo"}
                        textoAcima={"Quantidade de Cursos"}
                        textoAbaixo={"57 Cursos"}
                        />
                        <RankContainer
                        imagem={Ufabc}
                        titulo={"UFABC - Universidade Federal do ABC"}
                        textoAcima={"Quantidade de Cursos"}
                        textoAbaixo={"25 Cursos"}
                        />
                        <RankContainer
                        imagem={Ifsp}
                        titulo={"IFSP - Instituto Federal de São Paulo"}
                        textoAcima={"Quantidade de Cursos"}
                        textoAbaixo={"137 Cursos"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RankFacul
