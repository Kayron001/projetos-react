import './Home.css'
import React from "react";
import Main from '../Template/Main/Main'
import Foto from '../../assets/img/Foto-bem-vindo.png'


export default props =>
    <Main icon='home' title='Início'
        subtitle='Bem Vindo!'>
        <div className='caixa-bemvindo'>
            <p className='msg-bemvindo'> Olá, muito obrigada por acessar minha página, aqui você vai poder descobrir um pouco mais sobre
                a minha história e meu trabalho, fique a vontade para navegar por aqui, se gostar de algo entre
                em contato comigo pelas minhas redes sociais. Até breve :)
            </p>
            <img className='img-bemvindo' src={Foto} alt="Foto de Bem Vindo" />
        </div>
    </Main>