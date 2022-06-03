import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import React from 'react';
import HashRouter from 'react-router-dom/HashRouter';

import Routes from './Routes';
import Logo from '../components/Template/Logo/Logo';
import Navegation from '../components/Template/Nav/Navegation';
import Footer from '../components/Template/Footer/Footer';


export default props =>
    <HashRouter>
        <div className="app">
            <Logo/>
            <Navegation/>
            <Routes/>
            <Footer/>
        </div>
    </HashRouter>