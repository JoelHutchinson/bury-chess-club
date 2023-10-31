import React from 'react';


class Competitions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"competitions"}>
                
                <div className={"winter-club-championship"}>
                    <h2>Winter Club Championship</h2>
                    <p>All games to be completed by DATE. Time control:
                        <span className={"bold"}> 75 minutes + 15 second increment per move. </span>
                        Starting numbers have been determined by random draw. The
                        Trophy will be awarded to the player
                        with the highest point score. Please note that points
                        scored against players completing fewer than half their
                        games are ineligble for determining placings. In case of a tie, the
                        Sonneborn-Berger system will be used for tiebreaking.</p>
                </div>
            </div>
        );
    }
}

export default Competitions;