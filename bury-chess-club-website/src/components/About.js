import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"about-paragraph"}>
                <p>This is what it's all about.</p>
            </div>
        );
    }
}

export default About;