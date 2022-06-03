import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from '../components/Contact/Contact'
import Galery from '../components/Galery/Galery'
import Location from '../components/Location/Location'

export default props =>
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/sobre' component={About}></Route>
        <Route path='/contato' component={Contact}></Route>
        <Route path='/localizacao' component={Location}></Route>
        <Route path='/galeria' component={Galery}></Route>
        <Redirect from='*' to='/'></Redirect>
    </Switch>