import React from 'react';
import PGNViewer from './PgnViewerJS.js';
import { fetchData } from './DataService';

class Competitions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: []
        };
    }

    componentDidMount() {
        // Fetch About data when component mounts.
        fetchData('games')
            .then(data => {
                this.setState({games: data.map(game => {
                    return {
                        date: game.acf.date_played,
                        pgn: game.acf.pgn,
                        whitePlayer: game.acf.white_player_name,
                        blackPlayer: game.acf.black_player_name,
                        event: game.acf.event
                    };
                })});
                console.log(this.state.gamePGNs);
            })
            .catch(error => {
                console.log(error);
            });
        
    }

    render() {
        return (
            <div className={"competitions"}>
                
                <div className={"winter-club-championship"}>
                    <h2>Winter Club Championship</h2>
                    <p>All games to be completed by 01/02/24. Time control:
                        <span className={"bold"}> 75 minutes + 15 second increment per move. </span>
                        Starting numbers have been determined by random draw. The
                        Trophy will be awarded to the player
                        with the highest point score. Please note that points
                        scored against players completing fewer than half their
                        games are ineligble for determining placings. In case of a tie, the
                        Sonneborn-Berger system will be used for tiebreaking.</p>
                </div>
                <hr></hr>
                <div className={"games-of-the-month"}>
                    <h2>Games of the Month</h2>
                    {this.state.games.map(game => {
                        return (
                            <div>
                                <h3>{game.date}: {game.whitePlayer} vs {game.blackPlayer} ({game.event})</h3>
                                <PGNViewer>{game.pgn}</PGNViewer>
                            </div>
                        );
                    })}
                    
                </div>
            </div>
        );
    }
}

export default Competitions;