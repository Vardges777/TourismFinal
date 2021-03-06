import React from "react";
import {NavLink} from "react-router-dom"


function Header(){
    return(
        <nav className="navbar navba r-expand-lg navbar-light px-5">
            <NavLink exact activeClassName="currentLink" to="/">
                     Home
            </NavLink>
            <NavLink  activeClassName="currentLink" to="/findCountry">
                   Find Country
            </NavLink>
        </nav>
    )
}

export default Header