import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemLisContainer } from '../componets/ItemLisContainer/ItemLisContainer'
import ProductosMujer from "../componets/Productos/ProductosMujer";
import ProductosHombre from "../componets/Productos/ProductosHombre"
import NavBar from "../componets/NavBar/NavBar";

const Router = () => {
    return (
        <BrowserRouter>
        <NavBar/>
            <Switch>
                <Route exact path="/" component={ ItemLisContainer } /> 
                <Route path="/ProductosMujer" component={ ProductosMujer } /> 
                <Route path="/ProductosHombre" component={ProductosHombre }/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
