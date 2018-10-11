import React, { Component } from 'react';


class Unit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unitCount: 0
        }
    }

    handleUpClick = () => {
        // increase the unit by 1
        this.setState({
            unitCount: this.state.unitCount + 1
        }, () => {
            this.props.subtractCurrentCurrency(this.props.cost)
        })
    }
    handleDownClick = () => {
        // not go past zero
        if (this.state.unitCount > 0){
            // decrease the unit by 1
            this.setState({
                unitCount: this.state.unitCount - 1
            }, () => {
                this.props.increaseCurrentCurrency(this.props.cost)
            })
        }

    }

    render() {
        return (
            <li className="unit">
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.summary}</p>
                    <h3>Cost:{this.props.cost}💰</h3>
                    <h3>Attack:{this.props.attack}⚔️</h3>
                    <h3>health: {this.props.health}❤️</h3>
                </div>
                <div>
                    <p>x{this.state.unitCount}</p>
                    <button onClick={this.handleUpClick}>+</button>
                    <button onClick={this.handleDownClick}>-</button>
                </div>
            </li>
        );
    }
}

export default Unit;
