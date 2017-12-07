import React from 'react';

import Common from '../common/index.jsx';
import LuTangWall from './LuTangWall.jsx';
import LuTangTrend from './LuTangTrend.jsx';

//受热面模块
class ShouReMianModule extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: undefined };
        this.renderRows = this.renderRows.bind(this);
        this.renderColumn = this.renderColumn.bind(this);
    }

    componentWillMount() {
        Common.MyFetch.fetch('/shouremian', { method: 'GET' }, function (_json) {
            this.setState({ data: _json.data });
        }.bind(this));
        
        this.refreshInterval = setInterval(function () {
            Common.MyFetch.fetch('/shouremian', { method: 'GET' }, function (_json) {
                this.setState({ data: _json.data });
            }.bind(this));
        }.bind(this), 3000); 
    }

    componentWillUnmount() {
        clearTimeout(this.refreshInterval);
    }

    renderColumn(item, i) {
        let _color = Common.Utils.renderChuiHuiQiColor(item.value);

        return (
            <div className="col-sm-1 shouremian-pane" key={i}>
                <div className="card shouremian-card" style={{ backgroundColor: _color }}>
                    <div className="card-content text-center shouremian-pane-card-content" >
                        {item.field}
                    </div>
                </div>
            </div>
        )
    }

    renderRows(row, i) {
        return (
            <div key={i} className="row shouremian-row">
                <div className="col-sm-2 shouremian-pane">
                    <div className="card shouremian-card">
                        <div className="card-content text-center shouremian-pane-card-content">
                            {row.name}
                        </div>
                    </div>
                </div>
                {
                    row.items.map(this.renderColumn)
                }
            </div>
        );
    }

    render() {
        let _data = this.state.data;
        if (!_data) {
            return (
                <div />
            )
        } else {
            return (
                <div className="card">
                    <div className="card-content">
                        {
                            _data.rows.map(this.renderRows)
                        }
                    </div>
                </div>
            );
        }
    }

}

export default ShouReMianModule;