import React from "react";
import { NavLink } from "react-router-dom";
import germanFlag from "../images/germanFlag.png";

function NavBar () {

    const linkStyles = {
        display: "inline-block",
        width: "150px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div className="navBar">
            <img id="flag1" src={germanFlag}></img>
            <img id="flag2" src={germanFlag}></img>
            <h2 className="headerText">Herzlich Willkommen!</h2>
            
            

            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >Home</NavLink>
            <NavLink 
                to="/createjournal"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >Create Journal Entry</NavLink>
            <NavLink
                to="/displayjournals"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >View Journal Entries</NavLink>
            <NavLink
                to="/vocabulary"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
                >Useful Vocabulary</NavLink>
        </div>
    )
}

export default NavBar;