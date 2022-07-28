import './Galery.css'
import React, { Component } from "react";
import Main from "../Template/Main/Main";
import produto1 from '../../assets/galeria/produto1.jpeg'
import produto2 from '../../assets/galeria/produto2.jpeg'
import produto3 from '../../assets/galeria/produto3.jpeg'
import produto4 from '../../assets/galeria/produto4.jpeg'
import produto5 from '../../assets/galeria/produto5.jpeg'
import produto6 from '../../assets/galeria/produto6.jpeg'
import produto7 from '../../assets/galeria/produto7.jpeg'
import produto8 from '../../assets/galeria/produto8.jpeg'
import produto9 from '../../assets/galeria/produto9.jpeg'
import produto10 from '../../assets/galeria/produto10.jpeg'
import produto11 from '../../assets/galeria/produto11.jpeg'
import produto12 from '../../assets/galeria/produto12.jpeg'
import produto13 from '../../assets/galeria/produto13.jpeg'
import produto14 from '../../assets/galeria/produto14.jpeg'
import produto15 from '../../assets/galeria/produto15.jpeg'
import produto16 from '../../assets/galeria/produto16.jpeg'
import produto17 from '../../assets/galeria/produto17.jpeg'
import produto18 from '../../assets/galeria/produto18.jpeg'
import produto19 from '../../assets/galeria/produto19.jpeg'
import produto20 from '../../assets/galeria/produto20.jpeg'
import produto21 from '../../assets/galeria/produto21.jpeg'
import produto22 from '../../assets/galeria/produto22.jpeg'

const headerProps = {
    icon: 'image',
    title: 'Galeria',
    subtitle: 'Conheça um pouco do meu trabalho'
}

export default class Galery extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div className="galeria">
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto1} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto2} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto3} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto4} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto5} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto6} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto7} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto8} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto9} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto10} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto11} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto12} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto13} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto14} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto15} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto16} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto17} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto18} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto19} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto20} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto21} className="galeria-item" />
                    </p>
                    <p className="galeria-item">
                        <img alt="Imagem" src={produto22} className="galeria-item" />
                    </p>
                </div>
            </Main>
        )
    }
}