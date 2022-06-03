import './Contact.css';
import React, { Component } from "react";
import Main from "../Template/Main/Main";

const headerProps = {
    icon: 'id-card',
    title: 'Contato',
    subtitle: 'Fale comigo em minhas redes sociais'
}

export default class Contact extends Component {
    render() {


        function goToWpp() {
            let msg = document.querySelector('.caixa')
            let msgValue = msg.value
            let url = `https://wa.me/5513991122171?text=${msgValue}`
    
            window.open(url, "_blank").focus()
        }
    
        function goToFace() {
            let url = "https://www.facebook.com/lucilene.bezerra.33234"
            window.open(url, "_blank").focus()
        }
        function goToInsta() {
            let url = "https://www.instagram.com/lucilenebz/"
            window.open(url, "_blank").focus()
        }
        function goToYoutube() {
            let url = "https://www.youtube.com/channel/UCyrDODZo0CvDSX6jU-gR0-w?sub_confirmation=1"
            window.open(url, "_blank").focus()
        }
    
        //botão enviar
        function onMouseEnter() { document.querySelector('.botao-enviar').style.background = "#CFCFCF" }
        function onMouseLeave() { document.querySelector('.botao-enviar').style.background = "white" }
        //botão facebook
        function onMouseEnterface() { document.querySelector('.contato-face').style.background = "#CFCFCF" }
        function onMouseLeaveface() { document.querySelector('.contato-face').style.background = "white" }
        //botão instagram
        function onMouseEnterInsta() { document.querySelector('.contato-insta').style.background = "#CFCFCF" }
        function onMouseLeaveInsta() { document.querySelector('.contato-insta').style.background = "white" }
        //botão youtube
        function onMouseEnterYoutube() { document.querySelector('.contato-youtube').style.background = "#CFCFCF" }
        function onMouseLeaveYoutube() { document.querySelector('.contato-youtube').style.background = "white" }


        return (
            <Main {...headerProps}>
                <div className='contato-caixa'>
                    <div className="contato-wpp">
                        <p className='mensagem'>Me envie uma mensagem no Whatsapp:</p>
                        <textarea className='caixa' placeholder='Escreva sua mensagem.'></textarea>
                        <input type="button" value="Enviar" className='botao-enviar'
                            onClick={goToWpp} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                    </div>
                    <div className="rede-sociais">
                        <div className="face">
                            Facebok:
                            <input type="button" value="Visitar Página" className='contato-face'
                                onClick={goToFace} onMouseEnter={onMouseEnterface} onMouseLeave={onMouseLeaveface} />
                        </div>
                        <div className="insta">
                            Instagram:
                            <input type="button" value="Visitar Página" className='contato-insta'
                                onClick={goToInsta} onMouseEnter={onMouseEnterInsta} onMouseLeave={onMouseLeaveInsta} />
                        </div>
                        <div className="youtube">
                            Youtube:
                            <input type="button" value="Visitar Canal" className='contato-youtube'
                                onClick={goToYoutube} onMouseEnter={onMouseEnterYoutube} onMouseLeave={onMouseLeaveYoutube} />
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}