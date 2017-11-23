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
                <td>{row.value}</td>
            </tr>
        )
    }

    render() {
        let _data = this.props.data;

        return (
            <div className="card card-stats">
                <div className="card-header" data-background-color="purple">
                    <i className="fa fa-file-text"></i>
                </div>
                <div className="card-content">
                    <p className="category">{_data.name}</p>
                    <h3 className="card-title">{_data.pollution_rate}</h3>

                </div>
                <div className="card-footer">
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