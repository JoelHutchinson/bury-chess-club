import React from 'react';
import { fetchData } from './DataService';

class Privacy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notices: []
        };
    }

    componentDidMount() {
        // Fetch About data when component mounts.
        fetchData('privacy-notice')
            .then(data => {
                this.setState({notices: data.map(notice => {
                    return {
                        heading: notice.acf.heading,
                        text: notice.acf.text
                    }
                })});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className='privacy'>
                <h1 id='privacy-policy-heading'>Privacy Policy</h1>
                <p>
                We are committed to protecting the privacy and security of our website users.
                This privacy policy outlines our practices regarding the collection, use, and
                disclosure of personal information.
                </p>
                {this.state.notices.map(notice => {
                    return (<div>
                        <h2>{notice.heading}</h2>
                        <p>{notice.text}</p>
                    </div>);
                })}
            </div>
        );
    }
}

export default Privacy;