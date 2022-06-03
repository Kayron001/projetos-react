import React, { Component } from "react";
import Main from "../Template/Main/Main";

const headerProps = {
    icon: 'quote-left',
    title: 'Sobre',
    subtitle: 'Sobre mim e minha história.'
}

export default class About extends Component {
    render(){
        return (
            <Main {...headerProps}>
                Sobre
            </Main>
        )
    }
}