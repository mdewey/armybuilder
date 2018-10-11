import React, { Component } from 'react';
import Unit from './Unit';

import Army from '../Data/army.json';

class Units extends Component {
    render() {
        console.log({Army});
        return (
            <section>
                <header>Army List</header>
                <section>
                    <ul>
                        <Unit />
                        <Unit />
                        <Unit />
                        <Unit />
                    </ul>
                </section>
            </section>
        );
    }
}

export default Units;
