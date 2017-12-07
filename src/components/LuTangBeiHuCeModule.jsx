import React from 'react';

import Common from '../common/index.jsx';
import LuTangBeihuoceWall from './LuTangBeihuoceWall.jsx';

//炉膛背火侧模块
class LuTangBeiHuCeModule extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectItem: 'right', data: undefined };
        this.generateClassName = this.generateClassName.bind(this);
    }

    componentWillMount() {
        Common.MyFetch.fetch('/lutangbeihuce/' + this.state.selectItem, { method: 'GET' }, function (_json) {
            this.setState({ data: _json.data });
        }.bind(this));
        
        this.refreshInterval = setInterval(function(){
            Common.MyFetch.fetch('/lutangbeihuce/' + this.state.selectItem, { method: 'GET' }, function (_json) {
                this.setState({ data: _json.data });
            }.bind(this));
        }.bind(this), 3000);

    
    }

    componentWillUnmount() {
        clearTimeout(this.refreshInterval);
    }

    clickNavItem(_clickItem) {
        Common.MyFetch.fetch('/lutangbeihuce/' + _clickItem, { method: 'GET' }, function (_json) {
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
                        <LuTangBeihuoceWall data={this.state.data}/>
                    </div>
                </div>
            </div>
        )

    }

}

export default LuTangBeiHuCeModule;