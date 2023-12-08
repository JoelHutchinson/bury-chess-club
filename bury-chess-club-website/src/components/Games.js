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
            tabValue: 'one',
            whitePlayerInput: '',
            blackPlayerInput: '',
            selectedEvent: null
        };

        this.handleWhitePlayerChange = this.handleWhitePlayerChange.bind(this);
        this.handleBlackPlayerChange = this.handleBlackPlayerChange.bind(this);
        this.handleEventChange = this.handleEventChange.bind(this);

        this.handleTabChange = this.handleTabChange.bind(this);
    }

    componentDidMount() {
        // Fetch game data when component mounts.
        Promise.all([fetchData('games'), fetchData('players')])
        .then(([gamesData, playersData]) => {           
            const games = gamesData.map(game => ({
                id: game.id,
                date: game.acf.date_played,
                pgn: game.acf.pgn,
                whitePlayer: playersData.find(player => (player.id === game.acf.white_player[0])).acf.name,
                blackPlayer: playersData.find(player => (player.id === game.acf.black_player[0])).acf.name,
                event: game.acf.event,
                description: game.acf.description,
                popularity: game.acf.popularity
            }));

            this.setState({ games: games });
        })
        .catch(error => {
            console.log(error);
        });
    }

    // Input handlers

    handleWhitePlayerChange (event) {
        this.setState({ whitePlayerInput: event.target.value });
    };
    
    handleBlackPlayerChange (event) {
        this.setState({ blackPlayerInput: event.target.value });
    };
    
    handleEventChange (event, value) {
        this.setState({ selectedEvent: value });
    };


    // Tab handler

    handleTabChange (event, newValue) {
        this.setState({
            tabValue: newValue
        });
    };

    // Like button handlers

    handleLike (gameId) {

    };

    handleUnlike (gameId) {

    };

    gamesToEventList(games) {
        const eventArr = games.map(game => (game.event));
        const uniqueEventArr = [...new Set(eventArr)];
        
        return uniqueEventArr.map(event => {
            return ({
                label: event
            });
        });
    };

    render() {
        const filteredGames = this.state.games.filter((game) => {
            return (
                (!this.state.whitePlayerInput || game.whitePlayer.toLowerCase().includes(this.state.whitePlayerInput.toLowerCase())) &&
                (!this.state.blackPlayerInput || game.blackPlayer.toLowerCase().includes(this.state.blackPlayerInput.toLowerCase())) &&
                (!this.state.selectedEvent || game.event === this.state.selectedEvent.label)
            );
        });

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
                                likeCount={game.popularity}
                                handleLike={this.handleLike}
                                handleUnlike={this.handleUnlike}
                            ></GameCard>
                        );
                    })}
                </div> : null}
                {this.state.tabValue === "two" ? <div>
                    <div className={"game-search-options"}>
                        <Box display="flex" gap={2}>
                            <TextField
                                id="outlined-basic"
                                label="White Player"
                                variant="outlined"
                                value={this.state.whitePlayerInput}
                                onChange={this.handleWhitePlayerChange}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Black Player"
                                variant="outlined"
                                value={this.state.blackPlayerInput}
                                onChange={this.handleBlackPlayerChange}
                            />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.gamesToEventList(this.state.games)}
                                sx={{ width: 300 }}
                                value={this.state.selectedEvent}
                                onChange={this.handleEventChange}
                                isOptionEqualToValue={(option, value) => option.label === value.label}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="Event" />}
                            />
                            <IconButton aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Box>
                    </div>
                    <div className={"games"}>
                    {filteredGames.map((game) => (
                        <GameCard
                            key={game.whitePlayer + game.blackPlayer + game.event}
                            date={game.date}
                            pgn={game.pgn}
                            whitePlayer={game.whitePlayer}
                            blackPlayer={game.blackPlayer}
                            event={game.event}
                            description={game.description}
                        />
                    ))}
                   </div>
                </div> : null}
            </>
        );
    }
}

export default Games;