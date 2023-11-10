import React from 'react';
import { fetchData } from './DataService';

class RoundRobinTable extends React.Component {
    constructor(props) {
        super(props);
    }

    fullNameToInitials(fullName) {
        const nameArr = fullName.split(" ");
        return nameArr.map(name => name.charAt(0)).join("");
    }

    fullNamesToInitialsArr(fullNameArr) {
        return fullNameArr.map(name => this.fullNameToInitials(name));
    }


    render() {
        return (
            <div className={'round-robin-table'}>
              <h2>Results</h2>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {this.fullNamesToInitialsArr(this.props.players).map(name => {
                        return (<th key={name}>{name}</th>);
                    })}
                  </tr>
                </thead>
                <tbody>
                    {this.props.players.map((player1, player1Index) => {
                        return (
                        <tr key={player1Index}>
                            <td className={"round-robin-name"}>{player1}</td>
                            {this.props.players.map((player2, player2Index) => {
                                return (<td key={player2Index} className={"round-robin-cell"}>{this.props.matchMatrix[player1Index][player2Index]}</td>);
                            })}
                        </tr>
                        );
                    })}
                </tbody>
              </table>
            </div>
          );
    }  
  
};

export default RoundRobinTable;