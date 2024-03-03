import React, { Component } from 'react';


export class RepLogApp extends Component {

    render() {

        const repLogs = [
            { "id": 7, "reps": 16,"itemLabel": "My Laptop", "totalWeightLifted": 72 },
            { "id": 8, "reps": 6, "itemLabel": "My Laptop", "totalWeightLifted": 27 },
            { "id": 22, "reps": 5, "itemLabel": "Cat", "totalWeightLifted": 45 }
        ];

        return (
            <div className="col-md-7">
                <h2>
                    Lift History
                </h2>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>What</th>
                        <th>How many times?</th>
                        <th>Weight</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    { repLogs.map( (repLog,index) =>
                        (
                            <tr key={repLog.id}>
                                <td>{repLog.itemLabel}</td>
                                <td>{repLog.reps}</td>
                                <td>{repLog.totalWeightLifted}</td>
                                <td>...</td>
                            </tr>

                        )
                    )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>&nbsp;</td>
                        <th>Total</th>
                        <th>TODO</th>
                        <td>&nbsp;</td>
                    </tr>
                    </tfoot>
                </table>

            </div>
        );
    }
}

