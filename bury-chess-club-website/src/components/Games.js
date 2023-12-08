import * as React from 'react';
import PGNViewer from './PgnViewerJS.js';
import { fetchData } from './DataService';
import GameCard from './GameCard.js';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

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

    gamesToEventList(games) {
        const eventArr = games.map(game => (game.event));
        const uniqueEventArr = [...new Set(eventArr)];
        
        return uniqueEventArr.map(event => {
            return ({
                label: event
            });
        });
    }

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
                {this.state.tabValue === "two" ? <div className={"games"}>
                    <div className={"game-search-options"}>
                        <Box display="flex" gap={2}>
                            <TextField id="outlined-basic" label="White Player" variant="outlined" />
                            <TextField id="outlined-basic" label="Black Player" variant="outlined" />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.gamesToEventList(this.state.games)}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Event" />}
                            />
                            <IconButton aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Box>
                    </div>
                    {/* Games rendered here */}
                </div> : null}
            </>
        );
    }
}

export default Games;