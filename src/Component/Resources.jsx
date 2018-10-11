import React, { Component } from 'react';

class Resources extends Component {
    render() {
        return (
            <section>
                <header>resources</header>
                <section className="resources-section">
                    <span>{this.props.currency}</span>
                    <span>7</span>
                </section>
            </section>
        );
    }
}

export default Resources;
