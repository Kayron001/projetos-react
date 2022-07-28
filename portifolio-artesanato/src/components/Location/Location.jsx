import './Location.css'
import React, { Component } from "react";
import Main from "../Template/Main/Main";
import fotoLoja from '../../assets/img/foto-loja.png'
import ponteiro from '../../assets/img/ponteiro.png'

const headerProps = {
    icon: 'compass',
    title: 'Loja Física',
    subtitle: 'Venha visitar nossa loja.'
}

export default class Location extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div className="caixa-localizacao">
                    <div className='localizacao'>
                        <img className='frente-loja' src={fotoLoja} alt="Frente da loja" />
                    </div>
                        <div className="endereco">
                            <p><img className='ponteiro' src={ponteiro} alt="Ponteiro mapa" /></p>
                            <p>Arteiras</p>
                            <p>Loja Colaborativa de Artesanato</p>
                            <p>Super Centro Boqueirão</p>
                            <p>Loja 79</p>
                            <p>Santos - SP</p>
                            <a href="#/contato" className='botao-contato-localizacao'>Entre em contato</a>
                        </div>
                </div>
            </Main>
        )
    }
}