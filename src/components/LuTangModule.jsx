import React from 'react';

import Common from '../common/index.jsx';
import LuTangWall from './LuTangWall.jsx'

class LuTangModule extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: undefined, selectItem: 'right' };
        this.generateClassName = this.generateClassName.bind(this);
    }

    componentWillMount() {
        Common.MyFetch.fetch('/dashboard', { method: 'GET' }, function (_json) {
            this.setState({ data: _json });
        }.bind(this));
    }

    clickNavItem(_clickItem) {
        console.log(_clickItem);
        this.setState({ selectItem: _clickItem });
    }

    generateClassName(_itemName) {
        if (this.state.selectItem == _itemName) {
            return 'active';
        } else {
            return '';
        }
    }

    render() {
        let _data = this.state.data;
        if (_data) {
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
                            <LuTangWall />
                        </div>

                    </div>
                </div>
            )
        } else {
            return (<div className="content">  </div>);
        }
    }

}

export default LuTangModule;