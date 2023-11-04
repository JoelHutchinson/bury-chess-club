import React from 'react';

class Privacy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='privacy'>
                <h1 id='privacy-policy-heading'>Privacy Policy</h1>
                <p>
                We are committed to protecting the privacy and security of our website users.
                This privacy policy outlines our practices regarding the collection, use, and
                disclosure of personal information, even though we do not intentionally collect
                any user information.
                </p>
                <h2>Information We Do Not Collect</h2>
                <p>
                    We want to emphasize that Bury Chess Club does not intentionally collect any
                    user information. We do not collect, store, or process any personal data, such
                    as names, email addresses, or any other identifying information.
                </p>
                <h2>Third-Party Services</h2>
                <p>
                Our website may contain links to third-party websites, such as chess event organizers
                or relevant news sources. Please note that this privacy policy does not cover the practices
                of those websites. We recommend reviewing the privacy policies of any third-party websites
                you may visit through our platform.
                </p>
            </div>
        );
    }
}

export default Privacy;