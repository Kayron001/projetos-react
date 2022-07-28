import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import React from 'react';
import HashRouter from 'react-router-dom/HashRouter';

import Routes from './Routes';
import Logo from '../components/Template/Logo/Logo';
import Navigation from '../components/Template/Nav/Navigation';
import Footer from '../components/Template/Footer/Footer';


let props = () => {
    return (
        <HashRouter>
            <div className="app">
                <Logo />
                <Navigation />
                <Routes />
                <Footer />
            </div>
        </HashRouter>
    )
}
export default props 