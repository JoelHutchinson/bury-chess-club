import React from 'react';
import { NavLink } from 'react-router-dom';

import LeagueMatchImage from '../assets/bury-league-match.jpg'
import LeagueMatchImageCloseUp from '../assets/bury-league-match-closeup.jpg'

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"about"}>
                <div className={"about-the-club"}>
                    <h2>About the Club</h2>
                    <p>
                        Bury Chess Club, located in borough of Bury, is a The club provides a welcoming
                        and engaging environment for chess players of all skill levels. Every Tuesday
                        at 7:30 PM, members and guests gather at the club to participate in friendly
                        matches, engage in chess discussions, and foster a sense of community among chess
                        aficionados. Bury Chess Club offers a unique opportunity for individuals like
                        you, with a passion for chess, to enhance their skills and enjoy the intellectual
                        challenges this ancient game presents.
                    </p>
                    <div id={"club-images"} className={"image-gallery"}>
                        <img id={"league-match-image"} src={LeagueMatchImage} alt={"Bury chess club members playing a league match."} />
                        <img id={"league-match-closeup-image"} src={LeagueMatchImageCloseUp} alt={"Bury chess club members playing a league match with a close-up of a man in a black coat."} />
                    </div>
                </div>
                <hr></hr>
                <div className={"how-to-join"}>
                    <h2>How to join</h2>
                    <p>
                        Discuss registration with one of our club administrators. Feel free to come down to
                        our <NavLink to={"/contact"}>club night</NavLink> to play some games and discuss membership.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;