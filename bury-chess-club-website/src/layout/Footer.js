import React from 'react';
import { NavLink } from 'react-router-dom';


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className={'notices'}>
                    <p>Copyright © 2023</p>
                    <NavLink
                    to="/privacy">
                        Privacy Policy
                    </NavLink>
                    <NavLink
                    to="/cookies">
                        Cookies
                    </NavLink>
                </div>
                
            </footer>
        );
    }
}

export default Footer;