import React, { Component } from "react";
import Main from "../Template/Main/Main";

const headerProps = {
    icon: 'compass',
    title: 'Loja Física',
    subtitle: 'Venha visitar nossa loja.'
}

export default class Location extends Component {
    render(){
        return (
            <Main {...headerProps}>
                Localização
            </Main>
        )
    }
}