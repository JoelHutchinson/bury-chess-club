import React from 'react';
import ClubExterior from '../assets/bury-sports-club-exterior.jpg'
import ClubMap from '../assets/bury-sports-club-map.png'

import { fetchData } from './DataService';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className={"contact"}>
                <div className={"venue"}>
                    <h2>Venue</h2>
                    <p>
                        We are located at the <a href={"http://www.burysportsclub.co.uk/"} target={"_blank"}>Bury Sports Club</a>.
                        Club night is <span className={"bold"}>Tuesday</span> at <span className={"bold"}>7:30pm</span>.<br></br>
                        All ages & abilities welcome.
                    </p>
                    <div id={"venue-images"} className={"image-gallery"}>
                        <img id={"club-exterior-image"} src={ClubExterior} alt={"An image of the Bury Sports Club from a distance."} />
                        <img id={"club-exterior-image"} src={ClubMap} alt={"An image of the Bury Sports Club from a distance."} />
                    </div>
                </div>
                <hr></hr>
                <div className={"contacts-details"}>
                    <h2>Club Administration</h2>
                    <table id={"club-administration"}>
                        <thead>
                            <tr>
                                <td className={"administrator-title"}>President</td>
                                <td>Dave Mccarthy</td>
                                <td>dave@gmail.com</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={"administrator-title"}>Club Secretary</td>
                                <td>Jeremy Peach</td>
                                <td>jpeach_7@hotmail.com</td>
                            </tr>
                            <tr>
                                <td className={"administrator-title"}>Treasurer</td>
                                <td>Anthony Lee</td>
                                <td>anthony@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Contact;