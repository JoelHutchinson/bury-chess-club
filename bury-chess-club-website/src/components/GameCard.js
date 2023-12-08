import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import PGNViewer from './PgnViewerJS.js';
import LikeButton from './LikeButton.js';

class GameCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card sx={{ minWidth: 275 }}>
                <LikeButton
                    gameId={this.props.gameId}
                    likeCount={this.props.likeCount}
                />
                <CardHeader
                    title= {this.props.whitePlayer + " vs " + this.props.blackPlayer}
                    subheader={this.props.event + " - " + this.props.date}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <PGNViewer boardSize={"250"}>{this.props.pgn}</PGNViewer>
                </Box>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {this.props.description}
                    </Typography>          
                </CardContent>
            </Card>
        );
    }
}

export default GameCard;