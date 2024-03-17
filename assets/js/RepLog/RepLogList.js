import React from 'react'
import PropTypes from "prop-types";

export default function RepLogList({ highlightedRowId,
                                       onRowClick,
                                       repLogs,
                                       onDeleteReplog,
                                       isLoaded,
                                       isSavingNewReplog}) {



    const handleDeleteClick = (event, replogId) => {
        event.preventDefault();
        onDeleteReplog(replogId);
    }

    if ( ! isLoaded ){
        return (
            <tbody>
                <tr>
                    <td colSpan="4" className="text-center">Loading...</td>
                </tr>
        </tbody>);
    }

    return (
        <tbody>
        {repLogs.map((repLog, index) =>
            (
                <tr key={repLog.id}
                    className={highlightedRowId === repLog.id ? 'info' : ''}
                    onClick={() => onRowClick(repLog.id)}

                    style={{
                        opacity: repLog.isDeleting ? 0.3 : 1
                    }}
                >
                    <td>{repLog.itemLabel}</td>
                    <td>{repLog.reps}</td>
                    <td>{repLog.totalWeightLifted}</td>
                    <td>
                        <a href="#" onClick={(event) => handleDeleteClick(event,  repLog.id)}>
                            <span className="fa fa-trash"></span>
                        </a>
                    </td>
                </tr>

            )
        )}
        {isSavingNewReplog && (
            <tr>
                <td colSpan={`4`}
                    className={`text-center`}
                    style={{
                        opacity: .5
                    }}
                >Lifting the database...</td>
            </tr>
        )}
        </tbody>
    );
}

RepLogList.propTypes = {
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired,
    repLogs: PropTypes.array.isRequired,
    onDeleteReplog: PropTypes.func.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    isSavingNewReplog: PropTypes.bool.isRequired,
};