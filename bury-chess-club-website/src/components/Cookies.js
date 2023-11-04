import React from 'react';
import { NavLink } from 'react-router-dom';

class Cookies extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='cookies'>
                <h1>Cookie Notice</h1>
                <p>
                We want to inform you that our website, does not intentionally
                collect or store cookies on your device. Cookies are small text
                files used by websites to enhance user experience, but we do not
                utilize them for any purpose.
                While we may use essential cookies for basic website functionality,
                these do not collect personal information and are strictly necessary
                for the operation of the site. They are typically deleted when you
                close your browser.
                If you have any concerns or questions about cookies and privacy on
                our website, please feel free to <NavLink to="/contact">contact us</NavLink>.
                For more detailed information on how we handle privacy and data, please refer
                to our <NavLink to="/privacy">Privacy Policy</NavLink>.
                </p>
            </div>
        );
    }
}

export default Cookies;