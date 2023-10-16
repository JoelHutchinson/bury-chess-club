import React from 'react';
import '../App.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div id={"navbar"}>
                    <h1>Bury Chess Club</h1>
                    <nav id={"navigation"}>
                        <ul id={"navigation-list"}>
                            <li className={"navigation-item"}>
                                <a className={"navigation-link"} href={'/home'}>Home</a>
                            </li>
                            <li className={"navigation-item"}>
                                <a className={"navigation-link"} href={'/about'}>About</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;