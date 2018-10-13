import React, { Component } from 'react';

class Resources extends Component {
    render() {
        return (
            <section>
                <header>resources</header>
                <section className="resources-section">
                    <span>{this.props.currency}</span>
                    <span>{this.props.allowedTroops}</span>
                </section>
            </section>
        );
    }
}

export default Resources;
