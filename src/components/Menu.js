import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateLink from '../routes/createLinkHelper';
import RouterNames from "../routes/names";

const Menu = () => {
    return (
        <div className="container">
            <nav className="navbar">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <CreateLink name={RouterNames.HOME} />
                    </li>
                    <li>
                        <CreateLink name={RouterNames.CONTACT} />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;