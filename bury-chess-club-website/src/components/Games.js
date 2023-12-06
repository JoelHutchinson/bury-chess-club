import React from 'react';
import PGNViewer from './PgnViewerJS.js';
import { fetchData } from './DataService';
import GameAccordion from './GameAccordion.js';

class Games extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
        };
    }

    componentDidMount() {
        // Fetch game data when component mounts.
        Promise.all([fetchData('games'), fetchData('players')])
        .then(([gamesData, playersData]) => {           
            const games = gamesData.map(game => ({
                date: game.acf.date_played,
                pgn: game.acf.pgn,
                whitePlayer: playersData.find(player => (player.id === game.acf.white_player[0])).acf.name,
                blackPlayer: playersData.find(player => (player.id === game.acf.black_player[0])).acf.name,
                event: game.acf.event,
                description: game.acf.description
            }));

            this.setState({ games: games });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className={"games"}>
                <GameAccordion games={this.state.games}/>
                <h2>Game of the Month</h2>
                {this.state.games.map(game => {
                    return (
                        <div key={game.whitePlayer + "-" + game.blackPlayer + "-" + game.date}>
                            <div className={"chess-game-container"}>
                                <h3>{game.date}: {game.whitePlayer} vs {game.blackPlayer} ({game.event})</h3>
                                <div className={"chess-view-container"}>
                                    <PGNViewer>{game.pgn}</PGNViewer>
                                    <div className={"game-divider"}></div>
                                    <p>{game.description}</p>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    );
                })}
                
            </div>
        );
    }
}

export default Games;