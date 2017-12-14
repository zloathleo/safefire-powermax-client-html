import React from 'react';

import Common from '../common/index.jsx';
import AppState from '../state/AppState.jsx';

//吹灰器单元格
class LuTangChuihuiqiCell extends React.Component {

    constructor(props) {
        super(props);
    }

    clickChuiHuiQiCell(_name) {
        AppState.changeState('lutang.view', { name: _name, view: 'trend' });
    }

    render() {
        let _data = this.props.data;
        let _color = Common.Utils.renderChuiHuiQiColor(_data.status);
        let _nscolor = _data.ns ? '#9c27b0' : '#aaaaaa';
        return (
            <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="chuihuiqi-pane" style={{ backgroundColor: '#f5f5f5' }} onClick={this.clickChuiHuiQiCell.bind(this, _data.name)} >

                    <span className="badge cell-icon" >
                        {_data.name}
                        <i className="fa fa-superpowers fa-3" ></i>
                    </span>

                    <div>
                        <span className="label cell-value-bg">最大:{_data.max.toFixed(2)}</span>
                        <span className="label cell-value-bg" >最小:{_data.min.toFixed(2)}</span>

                    </div>

                    <div>
                        <span className="label cell-value-bg">温度:{_data.value.toFixed(2)}</span>
                        <span className="label cell-value-bg">污染率:{_data.pollutionRate.toFixed(2)}</span>

                    </div>

                    <div>
                        <span className="label cell-value-bg">状态:
                            <span className="badge" style={{ backgroundColor: _color }} >
                                {_data.status == 2 ? 'On' : 'Off'}
                            </span>
                        </span>

                    </div>
                    <div>
                        <span className="label cell-value-bg">需要吹灰:
                            <span className="badge" style={{ backgroundColor: _nscolor }} >
                                {_data.ns + ''}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default LuTangChuihuiqiCell;