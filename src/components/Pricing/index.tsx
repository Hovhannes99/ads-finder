import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import "../../style/SearchInputs/index.sass"



function Pricing(){
    return(
        <div className={"searchInputs"}>
            <Router>
                <div className={"pricingHider"}>
                    <nav className={"categories"}>
                        <NavLink className={"categoriesText"} to={"/cars"}>Cars</NavLink>
                        <NavLink className={"categoriesText"} to={"/estate"}>Real Estate</NavLink>
                        <NavLink className={"categoriesText"} to={"/electronics"}>Electronics</NavLink>
                    </nav>
                    <select className={"typeCarsInput"}>
                        <option  value={""}>Type of car</option>
                        <option>ggg</option>
                    </select>
                    <input  placeholder={"jjj"}/>
                </div>
            </Router>
        </div>
    )
}

export default Pricing