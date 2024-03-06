import React from 'react'
import PropTypes from "prop-types";

export default function RepLogList({ highlightedRowId, onRowClick }) {


    const repLogs = [
        {"id": 7, "reps": 16, "itemLabel": "My Laptop", "totalWeightLifted": 72},
        {"id": 8, "reps": 6, "itemLabel": "My Laptop", "totalWeightLifted": 27},
        {"id": 22, "reps": 5, "itemLabel": "Cat", "totalWeightLifted": 45}
    ];

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
                    <td>...</td>
                </tr>

            )
        )}
        </tbody>
    );
}

RepLogList.propTypes = {
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired
};