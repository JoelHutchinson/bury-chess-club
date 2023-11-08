import React from 'react';
import ClubExterior from '../assets/bury-sports-club-exterior.jpg'
import ClubMap from '../assets/bury-sports-club-map.png'

import { fetchData } from './DataService';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            administrators: []
        }
    }

    componentDidMount() {
        // Fetch About data when component mounts.
        fetchData('administrators')
            .then(data => {
                this.setState({administrators: data.map(admin => {
                    return {
                        title: admin.acf.title,
                        name: admin.acf.name,
                        email: admin.acf.email_address
                    };
                })});
                console.log(this.state.administrators);
            })
            .catch(error => {
                console.log(error);
            });
        
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
                        <tbody>
                            {this.state.administrators.map(admin => {
                                return (<tr key={admin.name}>
                                    <td className={"administrator-title"}>{admin.title}</td>
                                    <td>{admin.name}</td>
                                    <td>{admin.email}</td>
                                </tr>);
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Contact;