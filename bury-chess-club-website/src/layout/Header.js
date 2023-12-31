import React from 'react';
import Logo from '../assets/bury-chess-club-logo.jpg';

import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <NavLink
                to="/about">
                    <img id={"logo-image"} src={Logo} alt={"Bury Chess Club Logo"} />
                </NavLink>
                
                <h1 id={"club-name-heading"}>Bury Chess Club</h1>
                <nav id={"navigation"}>
                    <ul id={"navigation-list"}>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "navigation-link-pending" : isActive ? "navigation-link-active" : "navigation-link"
                                }
                            >About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "navigation-link-pending" : isActive ? "navigation-link-active" : "navigation-link"
                                }
                            >Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/competitions"
                                className={({ isActive, isPending }) =>
                                    isPending ? "navigation-link-pending" : isActive ? "navigation-link-active" : "navigation-link"
                                }
                            >Club Competitions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/games"
                                className={({ isActive, isPending }) =>
                                    isPending ? "navigation-link-pending" : isActive ? "navigation-link-active" : "navigation-link"
                                }
                            >Games
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;