import React from 'react';
import RepLogList from "./RepLogList";
import PropTypes, {number} from "prop-types";
// import RepLogCreator from "./RepLogCreator";
import RepLogCreator from "./RepLogCreatorControlledComponent";

function calculateTotalWeightLifted(repLogs){
    return repLogs.reduce( (accu,repLog) => repLog.totalWeightLifted + accu, 0);
}

export default function RepLog({
                                   highlightedRowId,
                                   handleRowClick,
                                   repLogs,
                                   onAddRepLog,
                                   numberOfChar,
                                   onNumberOfCharChange,
                                   onDeleteReplog,
                                   isLoaded,
                                   isSavingNewReplog,
                                   successMessage,
                                   newRepLogValidationErrorMessage
                               }) {

    return (
        <div className="col-md-7">
            <h2>
                Lift History {`${'🚀'.repeat(numberOfChar)}`}
            </h2>
            <input type={`range`} value={numberOfChar} onChange={ (event) => onNumberOfCharChange(+event.target.value)}/>
            {successMessage && (
                <div className={`alert alert-success text-center`}>
                    {successMessage}
                </div>
            )}
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>What</th>
                    <th>How many times?</th>
                    <th>Weight</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <RepLogList highlightedRowId={highlightedRowId}
                            onRowClick={handleRowClick}
                            repLogs={repLogs}
                            onDeleteReplog={onDeleteReplog}
                            isLoaded={isLoaded}
                            isSavingNewReplog={isSavingNewReplog}
                />
                <tfoot>
                <tr>
                    <td>&nbsp;</td>
                    <th>Total</th>
                    <th>{calculateTotalWeightLifted(repLogs)}</th>
                    <td>&nbsp;</td>
                </tr>
                </tfoot>
            </table>
            <div className={`row`}>
                <div className={`col-md-6`}>
                    <RepLogCreator onAddRepLog={onAddRepLog} validationErrorMessage={newRepLogValidationErrorMessage}/>
                </div>
            </div>
        </div>
    );
}

RepLog.propTypes = {
    highlightedRowId: PropTypes.any,
    handleRowClick: PropTypes.func.isRequired,
    onAddRepLog: PropTypes.func.isRequired,
    repLogs: PropTypes.array.isRequired,
    numberOfChar: PropTypes.number.isRequired,
    onNumberOfCharChange: PropTypes.func.isRequired,
    onDeleteReplog: PropTypes.func.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    isSavingNewReplog: PropTypes.bool.isRequired,
    successMessage: PropTypes.string.isRequired,
    newRepLogValidationErrorMessage: PropTypes.string.isRequired,
}