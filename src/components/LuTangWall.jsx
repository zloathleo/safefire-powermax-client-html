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
        this.renderRows = this.renderRows.bind(this);
    }

    renderRows(row, i) {
        return (
            <LuTangChuihuiqiCell data={row} key={i} />
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
                    <div className="row"  >
                        {
                            _data.rows.map(this.renderRows)
                        }
                    </div>
                </div>
            )
        }
    }
}

export default LuTangWall;