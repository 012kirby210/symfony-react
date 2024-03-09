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
        this.handleAddReplog = this.handleAddReplog.bind(this);
    }

    handleRowClick(repLogId){
        this.setState({ highlightedRowId: repLogId});
    }

    handleAddReplog(itemName, reps) {

        const newRep = {"id": uuid(), "reps": reps,  "itemLabel": itemName, "totalWeightLifted": Math.floor(Math.random()*50)};

        this.setState ( oldState => {
            const newReplogs = [...oldState.repLogs, newRep];
            return { repLogs: newReplogs };
        })
    }
    render() {
        return (<RepLog {...this.state} handleRowClick={this.handleRowClick} onAddRepLog={this.handleAddReplog}/>);
    }
}

