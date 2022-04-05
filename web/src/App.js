import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from './components/Home';
import Login from './components/Login'
import Pontos from './components/Pontos'
import Cadastro from './components/Cadastro';
import Quilos from './components/Quilos'

const App = ()=>{


    return(
        <BrowserRouter>
        <Menu/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Login' component={Login}/>
            <Route path='/Pontos' component={Pontos}/>
            <Route path='/Cadastro' component={Cadastro}/>
            <Route path='/Quilos' component={Quilos}/>
        </Switch>
        </BrowserRouter>
    )
}

export default App