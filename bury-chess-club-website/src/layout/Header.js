import React from 'react';
import Logo from '../assets/bury-chess-club-logo.jpg';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <img id={"logo-image"} src={Logo} alt="Bury Chess Club Logo" />
                <div id={"navbar"}>
                    <h1 id={"club-name-heading"}>Bury Chess Club</h1>
                    <nav id={"navigation"}>
                        <ul id={"navigation-list"}>
                            <li className={"navigation-item"}>
                                <a className={"navigation-link"} href={'/home'}>Home</a>
                            </li>
                            <li className={"navigation-item"}>
                                <a className={"navigation-link"} href={'/about'}>About</a>
                            </li>
                            <li className={"navigation-item"}>
                                <a className={"navigation-link"} href={'/contact'}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;