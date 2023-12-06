import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PGNViewer from './PgnViewerJS.js';

export default function GameAccordion(props) {
  return (
    <div>
    {['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'].map((month, monthIndex) => {
            return (
                <Accordion key={month}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>{month}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                             props.games
                             .filter(game => game.date.split("/")[1] == (monthIndex + 1))
                             .map(game => {
                                return (<PGNViewer>{game.pgn}</PGNViewer>);
                             })
                        }
                    </AccordionDetails>
                </Accordion>
            );
        })
    }
    </div>
  );
}