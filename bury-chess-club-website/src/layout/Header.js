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
                <img id={"logo-image"} src={Logo} alt={"Bury Chess Club Logo"} />
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
                    </ul>
                </nav>
                <div id={"social-icons"}>
                    <a className={"social-icon"} href={'https://www.facebook.com/BuryChessClub/'} target={'_blank'}><i className={'fa fa-facebook'}></i></a>
                    <a className={"social-icon"} href={'https://www.chess.com/club/bury-chess-club'} target={'_blank'}><i className={'fa fa-twitter'}></i></a>
                </div>
            </header>
        );
    }
}

export default Header;