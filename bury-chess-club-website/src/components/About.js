import React from 'react';
import LeagueMatchImage from '../assets/bury-league-match.jpg'
import LeagueMatchImageCloseUp from '../assets/bury-league-match-closeup.jpg'

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"about"}>
                <h2>About the Club</h2>
                <p>
                    Bury Chess Club, located in Bury, United Kingdom with the postal code BL9 9JX,
                    is a hub for chess enthusiasts in the region. The club provides a welcoming
                    and engaging environment for chess players of all skill levels. Every Tuesday
                    at 7:30 PM, members and guests gather at the club to participate in friendly
                    matches, engage in chess discussions, and foster a sense of community among chess
                    aficionados. Bury Chess Club offers a unique opportunity for individuals like
                    you, with a passion for chess, to enhance their skills and enjoy the intellectual
                    challenges this ancient game presents.
                </p>
                <div className={"image-gallery"}>
                    <img id={"league-match-image"} src={LeagueMatchImage} alt={"Bury chess club members playing a league match."} />
                    <img id={"league-match-closeup-image"} src={LeagueMatchImageCloseUp} alt={"Other Bury chess club members playing a league match."} />
                </div>
                <div className={"how-to-join"}>
                    <h2>How to join</h2>
                </div>
            </div>
        );
    }
}

export default About;