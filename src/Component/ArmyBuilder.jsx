import React, { Component } from 'react';
import Units from './Units'
import Resources from './Resources'
import Summary from './Summary'


class ArmyBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currency: 2400
        }
    }

    subtractCurrentCurrency = (amount) => {
        this.setState({
            currency: this.state.currency - amount
        })
    }

    increaseCurrentCurrency = (amount) => {
        this.setState({
            currency: this.state.currency + amount
        })
    }

    render() {
        return (
            <div className="army-app">
                <div className="left">
                    <Units  increaseCurrentCurrency={this.increaseCurrentCurrency} subtractCurrentCurrency={this.subtractCurrentCurrency}/>
                </div>
                <div className="right">
                    <Resources currency={this.state.currency} />
                    <Summary />
                </div>
            </div>
        );
    }
}

export default ArmyBuilder;
