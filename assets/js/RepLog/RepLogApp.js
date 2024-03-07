import React, { Component } from 'react';
import RepLog from "./Replog";


export class RepLogApp extends Component {

    constructor(props) {
        super(props);

        this.state =  {
            highlightedRowId: null,
            repLogs:  [
                {"id": 7, "reps": 16, "itemLabel": "My Laptop", "totalWeightLifted": 72},
                {"id": 8, "reps": 6, "itemLabel": "My Laptop", "totalWeightLifted": 27},
                {"id": 22, "reps": 5, "itemLabel": "Cat", "totalWeightLifted": 45}
            ]
        }

        this.handleRowClick = this.handleRowClick.bind(this);
    }

    handleRowClick(repLogId){
        this.setState({ highlightedRowId: repLogId});
    }
    render() {

        const { highlightedRowId, repLogs } = this.state;

        return (<RepLog highlightedRowId={highlightedRowId} handleRowClick={this.handleRowClick} repLogs={repLogs}/>);
    }
}

