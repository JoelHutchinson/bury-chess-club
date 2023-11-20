import React from 'react';
import { NavLink } from 'react-router-dom';
import { fetchData } from './DataService';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [],
            clubImages: []
        };
    }

    componentDidMount() {
        // Fetch About data when component mounts.
        Promise.all([fetchData('about'), fetchData('images')])
        .then(([aboutData, imageData]) => {
            const aboutSections = aboutData.map(section => ({
                heading: section.acf.heading,
                content: section.acf.content,
                orderIndex: section.acf.order_index,
                images: imageData.filter(image => section.acf.images.includes(image.id)).map(imageData => ({
                    title: imageData.acf.image.title,
                    url: imageData.acf.image.url,
                    alt: imageData.acf.image.alt
                }))
            }));

            aboutSections.sort((section1, section2) => {
                if (section1.orderIndex < section2.orderIndex) {
                    return -1;
                }
                if (section2.orderIndex < section1.orderIndex) {
                    return 1;
                }
                return 0;
            });

            this.setState({ sections: aboutSections });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className={"about"}>
                {this.state.sections.map(section => {
                    return (
                        <div className={"about-the-club"}>
                            <h2>{section.heading}</h2>
                            <p>{section.content}</p>
                            {section.images.length > 0 ? <div id={"club-images"} className={"image-gallery"}>
                                {section.images.map(img => {
                                    return (
                                        <img key={img.title} src={img.url} alt={img.alt} />
                                    );
                                })}
                            </div> : undefined}
                            <hr></hr>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default About;