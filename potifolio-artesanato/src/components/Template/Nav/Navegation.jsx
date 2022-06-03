import './Navegation.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i  className='fa fa-home'> Início</i>
            </a>
            <a href="#/sobre">
                <i class="fa fa-quote-left"> Sobre</i>
            </a>
            <a href="#/galeria">
                <i class="fa fa-image"> Galeria</i>
            </a>
            <a href="#/localizacao">
                <i class="fa fa-compass"> Localização</i>
            </a>
            <a href="#/contato">
                <i class="fa fa-id-card"> Contato</i>
            </a>
        </nav>
    </aside>