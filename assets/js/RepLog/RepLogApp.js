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
            isSavingNewReplog: false,
            successMessage: '',
        }

        this.successMessageTimeoutHandle = 0;

        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleAddReplog = this.handleAddReplog.bind(this);
        this.handleNumberOfChar = this.handleNumberOfChar.bind(this);
        this.handleRemoveReplog = this.handleRemoveReplog.bind(this);
        this.setSuccessMessage = this.setSuccessMessage.bind(this);
    }

    componentDidMount(){
        getRepLogs()
            .then( (data) => {
                this.setState({ repLogs: data, isLoaded: true});
            });
    }

    componentWillUnmount() {
        clearTimeout(this.successMessageTimeoutHandle);
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


        this.setState({isSavingNewReplog: true});

        createRepLog(newRep).then(repLog => {

            this.setState(prevState => {
                const newReplogs = [...prevState.repLogs, repLog];
                return {
                    repLogs: newReplogs,
                    isSavingNewReplog: false,
                };

            })
            // re-rendering !
            this.setSuccessMessage('Rep Log saved!');
        });

    }

    handleRemoveReplog(id) {

        deleteRepLog(id);
        this.setState( (prevState) => {
            return {
                repLogs: prevState.repLogs.filter( (replog) => replog.id !== id),
            }
        });
        // this.setState(({
        //     repLogs: this.state.repLogs.filter( (repLog) => repLog.id !== id)
        // }));
    }


    setSuccessMessage(message) {
        this.setState({successMessage: 'Rep saved !'});

        clearTimeout(this.successMessageTimeoutHandle);
        this.successMessageTimeoutHandle = setTimeout( () => {
            this.setState({successMessage: ''});
            this.successMessageTimeoutHandle = 0;
        }, 1500);
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

