import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PGNViewer from './PgnViewerJS.js';

export default function GameAccordian(props) {
    const dateArray = props.games.filter(game => (game.date));

    const uniqueYears = [...new Set(dateArray.map(date => date.split('/')[2]))];

    const uniqueMonthsByYear = {};
    dateArray.forEach(date => {
        const [day, month, year] = String(date).split('/');
        if (!uniqueMonthsByYear[year]) {
          uniqueMonthsByYear[year] = [month];
        } else if (!uniqueMonthsByYear[year].includes(month)) {
          uniqueMonthsByYear[year].push(month);
        }
      });

    console.log(uniqueYears); // Array of unique years
    console.log(uniqueMonthsByYear); // Array of unique years

  return (
    <div>
    {uniqueYears.map((year) => {
        return (<Accordion key={year}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>{year}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {uniqueMonthsByYear[year].map((month) => {
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
                                .filter(game => game.date.split("/")[1] == (parseInt(month)))
                                .map(game => {
                                    return (<PGNViewer>{game.pgn}</PGNViewer>);
                                })
                            }
                        </AccordionDetails>
                    </Accordion>
                );
            })}
            </AccordionDetails>
        </Accordion>);  
    })
    }
    </div>
  );
}