import React from 'react';
import { NavLink } from 'react-router-dom';
import { fetchData } from './DataService';

import LeagueMatchImage from '../assets/bury-league-match.jpg'
import LeagueMatchImageCloseUp from '../assets/bury-league-match-closeup.jpg'

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: null   
        };
    }

    componentDidMount() {
        // Fetch About data when component mounts.
        fetchData('about')
            .then(data => {
                this.setState({content: data})
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className={"about"}>
                <div className={"about-the-club"}>
                    <h2>About the Club</h2>
                    <p>
                        Bury Chess Club, located in the Greater Manchester borough of Bury provides a welcoming
                        and engaging environment for chess players of all skill levels. We gather
                        at the club every <span className='bold'>Tuesday at 7:30 PM</span> to participate in friendly
                        matches and socialize. The club has members of all ages including
                        a number of junior players, teenagers, young adults and adults.

                        
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
                <hr></hr>
                <div className={"league-information"}>
                    <h2>League Participation</h2>
                    <p>
                        We compete in the local <a href={"https://www.manchesterchess.org.uk/main.php"} target={"_blank"}>Manchester Chess Federation League</a>,
                        as well as the <a href={"https://ecflms.org.uk/lms/node/52389/home"} target={"_blank"}>Bolton & District Chess League</a>.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;