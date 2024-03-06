import React, { Component } from 'react';
import RepLog from "./Replog";


export class RepLogApp extends Component {

    constructor(props) {
        super(props);

        this.state =  {
            highlightedRowId: null,
        }

        this.handleRowClick = this.handleRowClick.bind(this);
    }

    handleRowClick(repLogId){
        this.setState({ highlightedRowId: repLogId});
    }
    render() {

        const { highlightedRowId } = this.state;

        return (<RepLog highlightedRowId={highlightedRowId} handleRowClick={this.handleRowClick}/>);
    }
}

