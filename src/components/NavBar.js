import React from "react";
import { NavLink } from "react-router-dom";

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
        <div>
            <h2>Here is the NavBar!</h2>
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