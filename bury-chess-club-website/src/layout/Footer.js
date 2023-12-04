import React from 'react';
import { NavLink } from 'react-router-dom';


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className={"notices"}>
                    <p>Copyright © 2023</p>
                    <NavLink
                    to="/privacy">
                        Privacy Policy
                    </NavLink>
                </div>
                <div id={"social-icons"}>
                    <a className={"social-icon"} id={"facebook-link"} href={'https://www.facebook.com/BuryChessClub/'} target={'_blank'} rel={"noopener noreferrer"}><i id={"facebook-icon"}>f</i></a>
                    <a className={"social-icon"} id={"chesscom-link"} href={'https://www.chess.com/club/bury-chess-club'} target={'_blank'} rel={"noopener noreferrer"}><i id={"pawn-icon"}>♟</i></a>
                </div>
            </footer>
        );
    }
}

export default Footer;