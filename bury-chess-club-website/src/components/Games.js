import * as React from 'react';
import PGNViewer from './PgnViewerJS.js';
import { fetchData } from './DataService';
import GameAccordion from './GameAccordion.js';
import GameCard from './GameCard.js';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

class Games extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            tabValue: 'one'
        };

        this.handleTabChange = this.handleTabChange.bind(this);
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

    handleTabChange (event, newValue) {
        this.setState({
            tabValue: newValue
        });
    };

    render() {
        return (
            <>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={this.state.tabValue}
                        onChange={this.handleTabChange}
                        aria-label="game display navigation menu"
                        textColor="secondary"
                        indicatorColor="secondary"
                    >
                        <Tab
                        value="one"
                        label="Games of the week"
                        />
                        <Tab value="two" label="Search for a game" />
                    </Tabs>
                </Box>

                {this.state.tabValue === "one" ? <div className={"games"}> 
                    {this.state.games.map(game => {
                        return (
                            <GameCard key={game.whitePlayer + game.black_player + game.event}
                                date={game.date}
                                pgn={game.pgn}
                                whitePlayer={game.whitePlayer}
                                blackPlayer={game.blackPlayer}
                                event={game.event}
                                description={game.description}
                            ></GameCard>
                        );
                    })}
                </div> : null}
            </>
        );
    }
}

export default Games;