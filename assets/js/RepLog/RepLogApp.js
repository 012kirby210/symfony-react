import React, { Component } from 'react';
import RepLog from "./Replog";
import { v4 as uuid } from 'uuid';
import { getRepLogs, deleteRepLog,createRepLog } from "../api/rep_log_api";


export class RepLogApp extends Component {

    constructor(props) {
        super(props);

        this.state =  {
            highlightedRowId: null,
            repLogs:  [],
            numberOfChar: 1,
            isLoaded: false,
        }

        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleAddReplog = this.handleAddReplog.bind(this);
        this.handleNumberOfChar = this.handleNumberOfChar.bind(this);
        this.handleRemoveReplog = this.handleRemoveReplog.bind(this);
    }

    componentDidMount(){
        getRepLogs()
            .then( (data) => {
                this.setState({ repLogs: data, isLoaded: true});
            });
    }

    handleNumberOfChar(n){
        this.setState({numberOfChar: n});
    }
    handleRowClick(repLogId){
        this.setState({ highlightedRowId: repLogId});
    }

    handleAddReplog(itemValue, reps) {

        const newRep = {
            reps: reps,
            item: itemValue,
        };

        createRepLog(newRep).then(repLog => {

            this.setState(prevState => {
                const newReplogs = [...prevState.repLogs, repLog];
                return {repLogs: newReplogs};
            })
        });
    }

    handleRemoveReplog(id) {

        deleteRepLog(id);
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

