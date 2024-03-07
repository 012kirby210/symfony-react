import React, { Component } from 'react';
import RepLog from "./Replog";
import { v4 as uuid } from 'uuid';


export class RepLogApp extends Component {

    constructor(props) {
        super(props);

        this.state =  {
            highlightedRowId: null,
            repLogs:  [
                {"id": uuid(), "reps": 16, "itemLabel": "My Laptop", "totalWeightLifted": 72},
                {"id": uuid(), "reps": 6, "itemLabel": "My Laptop", "totalWeightLifted": 27},
                {"id": uuid(), "reps": 5, "itemLabel": "Cat", "totalWeightLifted": 45}
            ]
        }

        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleNewItemSubmit = this.handleNewItemSubmit.bind(this);
    }

    handleRowClick(repLogId){
        this.setState({ highlightedRowId: repLogId});
    }

    handleNewItemSubmit(itemName, reps) {
        this.setState( {
            ...this.state,
            repLogs: [
                ...this.state.repLogs,
                {"id": uuid(), "reps": reps,  "itemLabel": itemName, "totalWeightLifted": Math.floor(Math.random()*50)}
            ]
        });
    }
    render() {
        return (<RepLog {...this.state} handleRowClick={this.handleRowClick} onNewItemSubmit={this.handleNewItemSubmit}/>);
    }
}

