import React from 'react';
import ReactDOM from 'react-dom';
import {StylesProvider ,createGenerateClassName} from "@material-ui/core";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

//to fix classname collisions
const generateClassName = createGenerateClassName({
    productionPrefix:'ma'
})
export default ({history})=>{
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path='/' component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}