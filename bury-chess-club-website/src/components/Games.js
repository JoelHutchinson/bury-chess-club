import React from 'react';
import PGNViewer from './PgnViewerJS.js';
import { fetchData } from './DataService';
import GameAccordion from './GameAccordion.js';
import GameCard from './GameCard.js';

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
                {/*<GameAccordion games={this.state.games}/>*/}
                <h2>Game of the Month</h2>
                {this.state.games.map(game => {
                    return (
                        <div key={game.whitePlayer + game.black_player + game.event}>
                            <GameCard
                                date={game.date}
                                pgn={game.pgn}
                                whitePlayer={game.whitePlayer}
                                blackPlayer={game.blackPlayer}
                                event={game.event}
                                description={game.description}
                            ></GameCard>
                            <hr></hr>
                        </div>
                    );
                })}
                
            </div>
        );
    }
}

export default Games;