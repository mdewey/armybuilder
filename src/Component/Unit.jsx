import React, { Component } from 'react';

class Unit extends Component {
    render() {
        return (
            <li className="unit">
                <div>
                    <h2>Name goes here</h2>
                    <p>describe me?</p>
                    <h3>Cost:100</h3>
                    <h3>Attack:3</h3>
                    <h3>health: 10</h3>
                </div>
                <div>
                    <p>x8</p>
                    <button>+</button>
                    <button>-</button>
                </div>
            </li>
        );
    }
}

export default Unit;
