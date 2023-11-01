import React from 'react';
import PGNViewer from './PgnViewerJS.js';

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
                <hr></hr>
                <div className={"games-of-the-month"}>
                    <h2>Games of the Month</h2>
                    <PGNViewer>
                        [Event "F/S Return Match"]
                        [Site "Belgrade"]
                        [Date "1992.11.04"]
                        [Round "29"]
                        [White "Fischer, Robert J."]
                        [Black "Spassky, Boris V."]
                        [Result "1/2-1/2"]

                        1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8  10. d4 Nbd7
                        11. c4 c6 12. cxb5 axb5 13. Nc3 Bb7 14. Bg5 b4 15. Nb1 h6 16. Bh4 c5 17. dxe5 Nxe4 18. Bxe7 Qxe7 19. exd6 Qf6 
                        20. Nbd2 Nxd6 21. Nc4 Nxc4 22. Bxc4 Nb6 23. Ne5 Rae8 24. Bxf7+ Rxf7 25. Nxf7 Rxe1+ 26. Qxe1 Kxf7 27. Qe3 Qg5 
                        28. Qxg5 hxg5 29. b3 Ke6 30. a3 Kd6 31. axb4 cxb4 32. Ra5 Nd5 33. f3 Bc8 34. Kf2 Bf5 35. Ra7 g6 36. Ra6+ Kc5 
                        37. Ke1 Nf4 38. g3 Nxh3 39. Kd2 Kb5 40. Rd6 Kc5 41. Ra6 Nf2 42. g4 Bd3 43. Re6 1/2-1/2
                    </PGNViewer>
                </div>
            </div>
        );
    }
}

export default Competitions;