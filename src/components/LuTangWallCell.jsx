import React from 'react';

class LuTangWallCell extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let _data = this.props.data;
        return (
            <div className="col-xs-6 col-sm-3 col-md-3 chuihuiqi-pane">
                <div>
                    <span className="badge badge-danger" >最小:{_data.min}</span>
                    <span className="badge">最大:{_data.max}</span>
                </div> 
                <i className="fa fa-superpowers fa-3"></i>
                <div>
                    <span className="badge">温度:{_data.value}</span>
                    <span className="badge">污染:{_data.pollutionRate}</span>
                </div>
            </div>
        )
    }
}

export default LuTangWallCell;