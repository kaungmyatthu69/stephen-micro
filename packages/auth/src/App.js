import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {StylesProvider ,createGenerateClassName} from "@material-ui/core";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
//to fix classname collisions
const generateClassName = createGenerateClassName({
    productionPrefix:'auth'
})
export default ({history,onSignIn})=>{
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin">
                            <SignIn onSignIn={onSignIn} />
                        </Route>
                        <Route path="/auth/signup">
                            <SignUp onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}