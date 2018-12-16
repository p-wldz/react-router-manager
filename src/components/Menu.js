import React from 'react';
import { RouteLink } from '../routes/routerHelper';
import RouterNames from "../routes/names";

const Menu = () => {
    return (
        <div className="container">
            <nav className="navbar">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <RouteLink name={RouterNames.HOME}> </RouteLink>
                    </li>
                    <li>
                        <RouteLink name={RouterNames.CONTACT}> </RouteLink>
                    </li>
                    <li>
                        <RouteLink name={RouterNames.USERS} params={{ id: 5, name: "p-wldz" }}> </RouteLink>
                    </li>
                    <li>
                        <RouteLink name={RouterNames.REDIRECT}> </RouteLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;