import React from "react"
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "../Home"
const Main = ()=> {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </div>
    )
}

export default Main