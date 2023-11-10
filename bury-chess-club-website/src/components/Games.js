import React from 'react';
import PGNViewer from './PgnViewerJS.js';
import { fetchData } from './DataService';

class Games extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            competitions: []
        };
    }

    componentDidMount() {
        // Fetch game data when component mounts.
        fetchData('games')
            .then(data => {
                this.setState({games: data.map(game => {
                    return {
                        date: game.acf.date_played,
                        pgn: game.acf.pgn,
                        whitePlayer: game.acf.white_player_name,
                        blackPlayer: game.acf.black_player_name,
                        event: game.acf.event,
                        description: game.acf.description
                    };
                })});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className={"games-of-the-month"}>
                <h2>Games of the Month</h2>
                {this.state.games.map(game => {
                    return (
                        <div className={"chess-game-container"} key={game.whitePlayer + "-" + game.blackPlayer + "-" + game.date}>
                            <h3>{game.date}: {game.whitePlayer} vs {game.blackPlayer} ({game.event})</h3>
                            <div className={"chess-view-container"}>
                                <PGNViewer>{game.pgn}</PGNViewer>
                                <p>{game.description}</p>
                            </div>
                        </div>
                    );
                })}
                
            </div>
        );
    }
}

export default Games;