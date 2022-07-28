import './Navigation.css'
import React from "react";


const Navigation = () => {
    return (
        <aside className="menu-area" >
            <div className="caixa-nav">
                <nav className="menu">
                    <a href="#/">
                        <i className='fa fa-home'> </i>
                        <span>Início</span>
                    </a>
                    <a href="/#sobre">
                        <i class="fa fa-quote-left"> </i>
                        <span>Sobre</span>
                    </a>
                    <a href="#/galeria">
                        <i class="fa fa-image"> </i>
                        <span>Galeria</span>
                    </a>
                    <a href="#/localizacao">
                        <i class="fa fa-compass"> </i>
                        <span>Localização</span>
                    </a>
                    <a href="#/contato">
                        <i class="fa fa-id-card"> </i>
                        <span>Contato</span>
                    </a>
                </nav>
            </div>
        </aside>


    )
}


export default Navigation