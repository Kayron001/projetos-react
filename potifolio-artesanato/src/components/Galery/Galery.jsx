import React, { Component } from "react";
import Main from "../Template/Main/Main";

const headerProps = {
    icon: 'image',
    title: 'Galeria',
    subtitle: 'Conheça um pouco do meu trabalho'
}

export default class Galery extends Component {
    render(){
        return (
            <Main {...headerProps}>
                Galeria
            </Main>
        )
    }
}