import React from 'react';
import { FormattedMessage } from 'react-intl';

class DashBoardInfoCardPane extends React.Component {

    constructor(props) {
        super(props);
        this.renderRows = this.renderRows.bind(this);
    }

    renderRows(row, i) {
        return (
            <tr key={i}>
                <td>{row.field}</td>
                <td>{row.value.toFixed(2)}</td>
            </tr>
        )
    }

    render() {
        let _data = this.props.data;

        return (
            <div className="card">
                <div className="card-header card-header-icon" data-background-color="purple">
                    <i className="fa fa-file-text"></i>
                </div>
                <div className="card-content">
                    <h4 className="card-title">{_data.pollutionRate} % {_data.name}</h4>
                    <table className="table">
                        <tbody>
                            {
                                _data.values.map(this.renderRows)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default DashBoardInfoCardPane;