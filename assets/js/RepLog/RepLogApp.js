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
            ],
            numberOfChar: 1,
        }

        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleAddReplog = this.handleAddReplog.bind(this);
        this.handleNumberOfChar = this.handleNumberOfChar.bind(this);
        this.handleRemoveReplog = this.handleRemoveReplog.bind(this);
    }

    handleNumberOfChar(n){
        this.setState({numberOfChar: n});
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

    handleRemoveReplog(id) {

        this.setState( (prevState) => {
            return {
                repLogs: prevState.repLogs.filter( (replog) => replog.id !== id)            }
        });
        // this.setState(({
        //     repLogs: this.state.repLogs.filter( (repLog) => repLog.id !== id)
        // }));
    }

    render() {
        return (<RepLog {...this.state}
                        handleRowClick={this.handleRowClick}
                        onAddRepLog={this.handleAddReplog}
                        onNumberOfCharChange={this.handleNumberOfChar}
                        onDeleteReplog={this.handleRemoveReplog}

        />);
    }
}

