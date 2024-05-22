import React from 'react'
import './RankCurso.css'
import Medicina from '../../assets/medicina.png'
import Direito from '../../assets/direito.png'
import Administracao from '../../assets/adm.png'
import Economia from '../../assets/econo.png'
import MedVet from '../../assets/medivet.png'
import RankContainer from '../../components/Containers/RankContainer/RankContainer'
import NavBar from '../../components/NavBar/NavBar'
import MenuHamburger from '../../components/MenuHamburguer/Menuburger.jsx';


const RankCurso = () => {

    return (
        <div className="background">
            <div className='hamMenu'>
                <div className="burgermenufeed"><MenuHamburger/></div>
            </div>
            <div className="rankContainer">
                <div className="column"><NavBar/></div>
                <div class="container-facul">
                    <div className="main-column">
                        <RankContainer
                        imagem={Medicina}
                        titulo={"Medicina"}
                        textoAcima={"Nota de corte"}
                        textoAbaixo={"826,00"}
                        />
                        <RankContainer
                        imagem={Direito}
                        titulo={"Direito"}
                        textoAcima={"Nota de corte"}
                        textoAbaixo={"744,24"}
                        />
                        <RankContainer
                        imagem={Administracao}
                        titulo={"Administração"}
                        textoAcima={"Nota de corte"}
                        textoAbaixo={"678,00"}
                        />
                        <RankContainer
                        imagem={Economia}
                        titulo={"Economia"}
                        textoAcima={"Nota de corte"}
                        textoAbaixo={"672,00"}
                        />
                        <RankContainer
                        imagem={MedVet}
                        titulo={"Medicina Veterinária"}
                        textoAcima={"Nota de corte"}
                        textoAbaixo={"713,26"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RankCurso