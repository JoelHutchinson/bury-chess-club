import React from 'react';
import { fetchData } from './DataService';

class Competitions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            competitions: []
        };
    }

    componentDidMount() {
        // Fetch competition data when component mounts.
        fetchData('competitions')
        .then(data => {
            this.setState({competitions: data.map(competition => {
                return {
                    startDate: competition.acf.start_date,
                    endDate: competition.acf.end_date,
                    name: competition.acf.competition_name,
                    timeControlMinutes: competition.acf.time_control_minutes,
                    timeControlIncrement: competition.acf.time_control_increment,
                    description: competition.acf.description
                };
            })});
        })
        .catch(error => {
            console.log(error);
        });
        
    }

    render() {
        return (
            <div className={"competitions"}>
                {this.state.competitions.map(competition => {
                    return(<div key={competition.name} className={"club-competition"}>
                        <h2>{competition.name}</h2>
                        <p>All games to be completed by <span className={"bold"}>{competition.endDate}</span></p>
                        <p>
                            Time control: <span className={"bold"}>{competition.timeControlMinutes} minutes
                            + {competition.timeControlIncrement} second increment per move</span>
                        </p>
                        <p>
                            {competition.description}
                        </p>
                        <hr></hr>
                    </div>);
                })}
            </div>
        );
    }
}

export default Competitions;