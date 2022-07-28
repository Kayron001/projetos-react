import './About.css'
import React, { Component } from "react";
import Main from "../Template/Main/Main";
import fotoPerfil from '../../assets/img/foto-perfil.png'

const headerProps = {
    icon: 'quote-left',
    title: 'Sobre',
    subtitle: 'Sobre mim e minha história.'
}

export default class About extends Component {
    render(){
        return (
            <Main {...headerProps}>
                <div className='caixa-sobre'>
                    <img src={fotoPerfil} alt="" />
                    <p>
                    Meu nome é Lucilene Bezerra, eu pratico artesanato em madeira desde março de 2017.
                    Eu comecei a praticar artesanato e tudo começou como um hobby, e eu estudava a partir de uma escola para mulheres
                    com o passar das aulas o que era apenas um hobby mostrou-se como a minha verdadeira paixão.
                    Aprendi muito nesses anos e já tive a oportunidade de compartilhar meus conhecimentos na mesma escola que comecei a estudar,
                    mas ainda quero me aperfeiçoar e ser capaz de continuar compartilhando o que aprendi
                    com outras artesãs, e estou transformando aquilo que amo em minha fonte de renda, o artesanato.
                    </p>
                </div>
            </Main>
        )
    }
}