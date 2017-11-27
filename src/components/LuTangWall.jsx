import React from 'react';
import { FormattedMessage } from 'react-intl';

import AppState from '../state/AppState.jsx';
import Common from '../common/index.jsx';
import LuTangWallCell from './LuTangWallCell.jsx';

class LuTangWall extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: undefined };
        this.renderRows = this.renderRows.bind(this);
    }

    componentWillMount() {
        Common.MyFetch.fetch('/lutangwall', { method: 'GET' }, function (_json) {
            this.setState({ data: _json });
        }.bind(this));
    }

    renderRows(row, i) {
        console.log(row); 
        return (<div className="row">
            <LuTangWallCell key={0} data={row[0]}/>
            <LuTangWallCell key={1} data={row[1]}/>
            <LuTangWallCell key={2} data={row[2]}/>
            <LuTangWallCell key={3} data={row[3]}/>
        </div>);
    }

    render() { 
        let _data = this.state.data;
        console.log(_data);
        if (_data) {
            return (
                <div className="card-content">
                    {
                        _data.rows.map(this.renderRows)
                    }
                </div>
            )
        } else {
            return (
                <div className="card-content" />
            )
        }

    }
}

export default LuTangWall;