import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Map from "../Map";
import Pricing from "../Pricing";


function Nav () {
    return (
        <Router>
            <div className={"navLinks"}>
                <div className={"logo"}>
                </div>
                <div className={"menu"}>
                    <NavLink className={"textNav"} to={"/map"}>Map</NavLink>
                    <NavLink className={"textNav"} to={"/about"}>About us</NavLink>
                    <NavLink className={"textNav"} to={"/pricing"}>Pricing</NavLink>
                    <NavLink className={"textNav"} to={"/blog"}>Blog</NavLink>
                    <NavLink className={"textNav"} to={"/contacts"}>Contacts</NavLink>
                </div>
                <div className={"signIn"}>
                    <NavLink className={"textSignIn"} to={"/sign"}><p>Signin</p><PersonIcon id={"iconUser"}/></NavLink>
                </div>
            </div>
            <Switch>
                <Route path={"/map"}  component={Map}/>
                <Route exact path={"/pricing"} component={Pricing}/>
            </Switch>
        </Router>
    )
}

export default Nav