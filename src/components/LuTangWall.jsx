import React from 'react';
import { FormattedMessage } from 'react-intl';

import AppState from '../state/AppState.jsx';
import Common from '../common/index.jsx';
import LuTangChuihuiqiCell from './LuTangChuihuiqiCell.jsx';

//炉膛墙壁
class LuTangWall extends React.Component {

    constructor(props) {
        super(props);
        //view:wall,trend
        this.state = { data: undefined };
        this.renderRows = this.renderRows.bind(this);
    }

    componentWillMount() {
        console.log('LuTangWall componentWillMount');
        Common.MyFetch.fetch('/lutangwall', { method: 'GET' }, function (_json) {
            this.setState({ data: _json });
        }.bind(this));
    }

    renderRows(row, i) {
        return (<div className="row" key={i}>
            <LuTangChuihuiqiCell key={0} data={row[0]} />
            <LuTangChuihuiqiCell key={1} data={row[1]} />
            <LuTangChuihuiqiCell key={2} data={row[2]} />
            <LuTangChuihuiqiCell key={3} data={row[3]} />
        </div>);
    }

    render() {
        let _data = this.state.data; 
        if (!_data) {
            return (
                <div className="card-content" />
            )
        } else {
            return (
                <div className="card-content">
                    {
                        _data.rows.map(this.renderRows)
                    }
                </div>
            )
        }
    }
}

export default LuTangWall;