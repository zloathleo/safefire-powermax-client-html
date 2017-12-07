import React from 'react';
import { FormattedMessage } from 'react-intl';

import AppState from '../state/AppState.jsx';
import Common from '../common/index.jsx';
import LuTangChuihuiqiCell from './LuTangChuihuiqiCell.jsx';

//炉膛背火侧
class LuTangBeihuoceWall extends React.Component {

    constructor(props) {
        super(props);
        //view:wall,trend 
        this.renderRows = this.renderRows.bind(this);
        this.renderColumn = this.renderColumn.bind(this);
    }

    componentWillMount() {
        // console.log('LuTangWall componentWillMount');
        // Common.MyFetch.fetch('/lutangbeihuce', { method: 'GET' }, function (_json) {
        //     this.setState({ data: _json });
        // }.bind(this));
    }

    renderColumn(item, i) {
        // let _color = Common.Utils.renderChuiHuiQiColor(item.status); 
        return (
            <div className="col-sm-3 shouremian-pane" key={i}>
                <div className="card shouremian-card">
                    <div className="card-content text-center shouremian-pane-card-content" >
                        {item.value.toFixed(2)}
                    </div>
                </div>
            </div>
        )
    }

    renderRows(row, i) {
        return (
            <div key={i} className="row shouremian-row">
                <div className="col-sm-4 shouremian-pane">
                    <div className="card shouremian-card" style={{backgroundColor:'#eee'}}>
                        <div className="card-content text-center shouremian-pane-card-content">
                            {row.name}
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    {
                        row.items.map(this.renderColumn)
                    }
                </div>
            </div>
        );
    }

    render() {
        let _data = this.props.data;
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

export default LuTangBeihuoceWall;