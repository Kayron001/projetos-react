import './Footer.css'
import youtube from '../../../assets/img/youtube.png'
import facebook from '../../../assets/img/facebook.png'
import whatsapp from '../../../assets/img/whatsapp.png'
import insta from '../../../assets/img/insta.png'
import React from 'react'

export default props => {
    function goToWpp() {
        let texto = "Olá eu gostaria de fazer uma encomenda"
        let url = `https://wa.me/5513991122171?text=${texto}`
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
        <footer className="footer">
            <div className='caixa-footer'>
            <p className='texto'><strong>Entre em contato para encomendar sua peça comigo</strong></p><br />
            <div >
                <img src={youtube} className='rede-social' onClick={goToYoutube}></img>
                <img src={insta} className='rede-social' onClick={goToInsta} ></img>
                <img src={whatsapp} className='rede-social' onClick={goToWpp}></img>
                <img src={facebook} className='rede-social' onClick={goToFace}></img>
            </div>
            </div>

        </footer>
    )
}




