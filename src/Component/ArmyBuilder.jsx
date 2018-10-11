import React, { Component } from 'react';
import Units from './Units'
import Resources from './Resources'
import Summary from './Summary'
class ArmyBuilder extends Component {
    render() {
        return (
            <div className="army-app">
                <div className="left">
                    <Units />
                </div>
                <div className="right">
                    <Resources />
                    <Summary />
                </div>
            </div>
        );
    }
}

export default ArmyBuilder;
