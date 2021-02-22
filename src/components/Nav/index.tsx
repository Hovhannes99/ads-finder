import React, {useState} from "react";
import PersonIcon from '@material-ui/icons/Person';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Pricing from "../Pricing";
import Register from "../Register";
import About from "../About";
import Map  from "../Map/index";



function Nav () {


    return (
        <Router>
            <div className={"navLinks"}>
                <div className={"logo"}>
                </div>
                <div className={"menu"}>
                    <NavLink className={"textNav"} to={"/"}>About us</NavLink>
                    <NavLink className={"textNav"} to={"/pricing"}>Pricing</NavLink>
                    <NavLink className={"textNav"} to={"/map"}>Map</NavLink>
                </div>
                <div className={"signIn"}>
                    <NavLink className={"textSignIn"} to={"/register"}><p>Signin</p><PersonIcon id={"iconUser"}/></NavLink>
                </div>
            </div>
            <Switch>
                <Route  exact path={"/"} component={About}/>
                <Route  path={"/pricing"} component={Pricing}/>
                <Route  path={"/register"} component={Register}/>
                <Route  path={"/map"} component={Map}/>
            </Switch>
        </Router>
    )
}

export default Nav