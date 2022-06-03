import './Footer.css'
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
            <p className='texto'><strong>Entre em contato para encomendar sua peça conosco</strong></p><br />
            <div>
                <button className='face'><i className='fa fa-youtube-play fa-3x' onClick={goToYoutube}></i></button>
                <button className='insta'><i className='fa fa-instagram fa-3x' onClick={goToInsta} ></i></button>
                <button className='wpp'><i className='fa fa-whatsapp fa-3x' onClick={goToWpp}></i></button>
                <button className='face'><i className='fa fa-facebook-square fa-3x' onClick={goToFace}></i></button>
            </div>

        </footer>
    )
}




