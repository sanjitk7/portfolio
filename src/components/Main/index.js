import React from "react"
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "../Sidebar"
const Main = ()=> {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                {/* <Route path="/projects" component={}></Route> */}
                {/* <Route path="/experience" component={Experience}></Route> */}
            </Switch>
        </div>
    )
}

export default Main