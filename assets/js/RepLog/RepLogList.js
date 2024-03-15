import React from 'react'
import PropTypes from "prop-types";

export default function RepLogList({ highlightedRowId,
                                       onRowClick,
                                       repLogs,
                                       onDeleteReplog}) {



    const handleDeleteClick = (event, replogId) => {
        event.preventDefault();
        onDeleteReplog(replogId);
    }

    return (
        <tbody>
        {repLogs.map((repLog, index) =>
            (
                <tr key={repLog.id}
                    className={highlightedRowId === repLog.id ? 'info' : ''}
                    onClick={() => onRowClick(repLog.id)}
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
        </tbody>
    );
}

RepLogList.propTypes = {
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired,
    repLogs: PropTypes.array.isRequired,
    onDeleteReplog: PropTypes.func.isRequired,
};