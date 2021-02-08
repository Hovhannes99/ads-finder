import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import "../../style/SearchInputs/index.sass"
import CarsSearch from "./CarsSearch";
import CarsPage from "../Categories/CarsPage";
import Footer from "../Footer";


function Pricing() {
    return (
        <>
        <div className={"searchInputs"}>
            <Router>
                <div className={"pricingHider"}>
                    <nav className={"categories"}>
                        <NavLink activeStyle={{color:"orange"}} className={"categoriesText"} to={"/cars"}>Cars</NavLink>
                        <NavLink activeStyle={{color:"orange"}} className={"categoriesText"} to={"/estate"}>Real Estate</NavLink>
                        <NavLink activeStyle={{color:"orange"}} className={"categoriesText"} to={"/electronics"}>Electronics</NavLink>
                    </nav>
                    <div className={"gridStyle"}>
                       <Switch>
                            <Route  exact path={"/cars"} component={CarsSearch}/>
                       </Switch>
                    </div>
                </div>
                <Switch>
                    <Route  exact path={"/cars"} component={CarsPage}/>
                </Switch>
            </Router>
        </div>
        </>
    )
}

export default Pricing