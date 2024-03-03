import React, { Component } from 'react';


export class RepLogApp extends Component {
    render() {
        const heart = this.props.shouldShowParameter ? 'heart' : '';
        return (
            <h2>Lift history {heart}</h2>
        );
    }
}

