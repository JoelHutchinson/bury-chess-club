import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"contact"}>
                <h2>Venue</h2>
                <p>
                    We are located at the <a href={"http://www.burysportsclub.co.uk/"} target={"_blank"}>Bury Sports Club</a>.
                    Club night is <span class="bold">Tuesday</span> at <span class="bold">7:30pm</span>.<br></br>
                    For all ages and abilities, whether casual or competitive.
                </p>
            </div>
        );
    }
}

export default Contact;