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
         
        return (
            <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="chuihuiqi-pane" style={{ backgroundColor: _color, cursor: 'pointer' }} onClick={this.clickChuiHuiQiCell.bind(this, _data.name)} >

                    <span className="badge cell-icon" >
                        {_data.name}
                        <i className="fa fa-superpowers fa-3" ></i>
                    </span>

                    <div>
                        <span className="label cell-value-bg" >最小值:{_data.min}</span>
                        <span className="label cell-value-bg">最大值:{_data.max}</span>
                    </div>

                    <div>
                        <span className="label cell-value-bg">温度值:{_data.value}</span>
                        <span className="label cell-value-bg">污染率:{_data.pollutionRate}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default LuTangChuihuiqiCell;