import React from "react";
import './Navigation.scss';
import { NavLink } from "react-router-dom";

class Navigation extends React.Component{
    render(){
        return(
            <div className="topnav">
                <NavLink to = "/" exact={true}>
                    Home
                </NavLink>
                <NavLink to = "/todo"   exact={true}>
                    Todo
                </NavLink>
                <NavLink to = "/about" >
                    About
                </NavLink>
                <NavLink to = "/user" >
                    ListUser
                </NavLink>
                

            </div>
        )
    }
}


export default Navigation