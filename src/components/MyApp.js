import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Detail from "./Detail"
import Home from "./Home"
import Contact from "./Contact"
import Navigation from './Navigation'

export default class MyApp extends Component {

    render() {
        return (
            <>
            <Navigation></Navigation>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/" component={Home} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </>
        )
    }
}
