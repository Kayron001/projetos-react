import './Contact.css';
import React, { Component } from "react";
import Main from "../Template/Main/Main";
import whatsapp from '../../assets/img/whatsapp.png'

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

        return (
            <Main {...headerProps}>
                <div className='contato-caixa'>
                    <div className="contato-wpp">
                        <p className='mensagem'>Me envie uma mensagem no Whatsapp:</p>
                        <textarea className='caixa' placeholder='Escreva sua mensagem.'></textarea>
                        <button className='botao-enviar'
                            onClick={goToWpp}><img src={whatsapp} alt='Whatsapp' />
                            Enviar Mensagem
                        </button>
                    </div>
                    <div className="rede-sociais">
                        <div className="botao-rede-social">
                            Facebok:
                            <input type="button" value="Visitar Página" className='contato-face'
                                onClick={goToFace}/>
                        </div>
                        <div className="botao-rede-social">
                            Instagram:
                            <input type="button" value="Visitar Página" className='contato-insta'
                                onClick={goToInsta} />
                        </div>
                        <div className="botao-rede-social">
                            Youtube:
                            <input type="button" value="Visitar Canal" className='contato-youtube'
                                onClick={goToYoutube}/>
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}