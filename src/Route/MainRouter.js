import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "../Components/Pages/Home";
import Search from "../Components/Pages/Search";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/search" component={Search}/>
        </Switch>
    )
}

export default Router;