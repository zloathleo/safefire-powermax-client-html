import React from 'react';

import Common from '../common/index.jsx';
import LuTangWall from './LuTangWall.jsx';
import LuTangTrend from './LuTangTrend.jsx';

//炉膛模块
class LuTangModule extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectItem: 'right', data: undefined, view: 'wall', trendName: undefined };
        this.generateClassName = this.generateClassName.bind(this);

        Common.EventProxy.on('lutang.view', (value) => {
            this.setState({ view: value.view, trendName: value.name })
        });
    }

    componentWillUnmount() {
        Common.EventProxy.off('lutang.view');
    }

    componentWillMount() {
        Common.MyFetch.fetch('/lutangwall/' + this.state.selectItem, { method: 'GET' }, function (_json) {
            this.setState({ data: _json.data });
        }.bind(this));
    }

    clickNavItem(_clickItem) {
        Common.MyFetch.fetch('/lutangwall/' + _clickItem, { method: 'GET' }, function (_json) {
            this.setState({ selectItem: _clickItem, data: _json.data });
        }.bind(this));
    }

    generateClassName(_itemName) {
        if (this.state.selectItem == _itemName) {
            return 'active';
        } else {
            return '';
        }
    }

    render() {
        let _view = this.state.view;
        if (_view == 'wall') {
            return (
                <div className="row">
                    <div className="col-md-12">
                        <div className="nav-center">
                            <ul className="nav nav-pills nav-pills-warning nav-pills-icons" role="tablist">

                                <li className={this.generateClassName('right')}>
                                    <a onClick={this.clickNavItem.bind(this, 'right')} href="#">
                                        <i className="fa fa-th"></i> 右墙
                                    </a>
                                </li>
                                <li className={this.generateClassName('back')}>
                                    <a onClick={this.clickNavItem.bind(this, 'back')} href="#">
                                        <i className="fa fa-th"></i> 后墙
                                    </a>
                                </li>
                                <li className={this.generateClassName('left')}>
                                    <a onClick={this.clickNavItem.bind(this, 'left')} href="#">
                                        <i className="fa fa-th"></i> 左墙
                                    </a>
                                </li>
                                <li className={this.generateClassName('front')}>
                                    <a onClick={this.clickNavItem.bind(this, 'front')} href="#">
                                        <i className="fa fa-th"></i> 前墙
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="card" style={{ marginTop: '0px' }}>
                            <LuTangWall data={this.state.data} />
                        </div>

                    </div>
                </div>
            )
        } else if (_view == 'trend') {
            return (
                <LuTangTrend name={this.state.trendName}/>
            );
        }

    }

}

export default LuTangModule;