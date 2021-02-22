import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import "../../style/SearchInputs/index.sass"
import CarsSearch from "./CarsSearch";
import CarsPage from "../Categories/CarsPage";
import RealEstateSearch from "./RealEstateSearch";
import RealEstatePage from "../Categories/RealEstatePage";
import Electronics from "../Pricing/Electronics";
import ElectronicsPage from "../Categories/ElectronicsPage";






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
                                <Route path={"/cars"} component={CarsSearch}/>
                                <Route path={"/estate"} component={RealEstateSearch}/>
                                <Route path={"/electronics"} component={Electronics}/>
                            </Switch>
                        </div>
                    </div>
                    <Switch>
                         <Route   path={"/cars"} component={CarsPage}/>
                         <Route   path={"/estate"} component={RealEstatePage}/>
                         <Route   path={"/electronics"} component={ElectronicsPage}/>
                    </Switch>
                </Router>

            </div>
        </>
    )
}

export default Pricing