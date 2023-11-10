import React from 'react';
import { fetchData } from './DataService';

import Competition from './Competition';

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

        Promise.all([fetchData('competitions'), fetchData('players')])
        .then(([competitionsData, playersData]) => {
            const competitions = competitionsData.map(competition => ({
                startDate: competition.acf.start_date,
                endDate: competition.acf.end_date,
                name: competition.acf.competition_name,
                timeControlMinutes: competition.acf.time_control_minutes,
                timeControlIncrement: competition.acf.time_control_increment,
                description: competition.acf.description,
                matchMatrix: [["", "b 1", "b", "w"], ["w", "", "b 1/2", "w"], ["w 1/2", "b", "", "w"], ["b", "b", "b 0", ""]],
                players: playersData.filter(player => competition.acf.players.includes(player.id)).map(player => player.acf.name)
            }));

            this.setState({ competitions: competitions });
        })
        .catch(error => {
            console.log(error);
        });
    }

    getMatchMatrix(matches) {

    }

    render() {
        return (
            <div className={"competitions"}>
                {this.state.competitions.map(competition => {
                    return(
                        <Competition
                            key={competition.name}
                            name={competition.name}
                            endDate={competition.endDate}
                            timeControlMinutes={competition.timeControlMinutes}
                            timeControlIncrement={competition.timeControlIncrement}
                            description={competition.description}
                            players={competition.players}
                            matchMatrix={competition.matchMatrix}
                        ></Competition>
                    );
                })}
            </div>
        );
    }
}

export default Competitions;