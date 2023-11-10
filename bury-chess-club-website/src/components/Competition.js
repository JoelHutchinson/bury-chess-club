import React from 'react';
import RoundRobinTable from './RoundRobinTable';

class Competition extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={"club-competition"}>
                <h2>{this.props.name}</h2>
                <p>All games to be completed by <span className={"bold"}>{this.props.endDate}</span></p>
                <p>
                    Time control: <span className={"bold"}>{this.props.timeControlMinutes} minutes
                    + {this.props.timeControlIncrement} second increment per move</span>
                </p>
                <p>
                    {this.props.description}
                </p>
                <RoundRobinTable
                    players={this.props.players}
                    matchMatrix={this.props.matchMatrix}
                ></RoundRobinTable>
                <hr></hr>
            </div>   
        );
    }  
  
};

export default Competition;