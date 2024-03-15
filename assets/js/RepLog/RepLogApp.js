import React, { Component } from 'react';
import RepLog from "./Replog";
import { v4 as uuid } from 'uuid';
import { getRepLogs } from "../api/rep_log_api";


export class RepLogApp extends Component {

    constructor(props) {
        super(props);

        this.state =  {
            highlightedRowId: null,
            repLogs:  [],
            numberOfChar: 1,
        }

        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleAddReplog = this.handleAddReplog.bind(this);
        this.handleNumberOfChar = this.handleNumberOfChar.bind(this);
        this.handleRemoveReplog = this.handleRemoveReplog.bind(this);
    }

    componentDidMount(){
        getRepLogs()
            .then( (data) => {
                this.setState({ repLogs: data});
            });
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

