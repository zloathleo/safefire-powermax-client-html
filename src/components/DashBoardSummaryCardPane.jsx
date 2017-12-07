import React from 'react';

class DashBoardSummaryCardPane extends React.Component {

    constructor(props) {
        super(props);
        this.renderRows = this.renderRows.bind(this);
    }

    renderRows(row, i) {
        return (
            <tr key={i}>
                <td>{row.field1}</td>
                <td>{row.value1}</td>
                <td>{row.field2}</td>
                <td>{row.value2}</td>
            </tr>
        )
    }

    render() {
        let _data = this.props.data;

        return (
            <div className="card">
                <div className="card-header card-header-icon" data-background-color="purple">
                    <i className="glyphicon glyphicon-home"></i>
                </div>
                <div className="card-content">
                    <h4 className="card-title">参数汇总</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-center">{_data[0].field}</th>
                                <th className="text-center">{_data[1].field}</th>
                                <th className="text-center">{_data[2].field}</th>
                                <th className="text-center">{_data[3].field}</th>
                                <th className="text-center">{_data[4].field}</th>
                                <th className="text-center">{_data[5].field}</th>
                                <th className="text-center">{_data[6].field}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">{_data[0].value.toFixed(2)}</td>
                                <td className="text-center">{_data[1].value.toFixed(2)}</td>
                                <td className="text-center">{_data[2].value.toFixed(2)}</td>
                                <td className="text-center">{_data[3].value.toFixed(2)}</td>
                                <td className="text-center">{_data[4].value.toFixed(2)}</td>
                                <td className="text-center">{_data[5].value.toFixed(2)}</td>
                                <td className="text-center">{_data[6].value.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default DashBoardSummaryCardPane;