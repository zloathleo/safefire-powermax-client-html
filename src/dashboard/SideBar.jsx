import React from 'react';
import { FormattedMessage } from 'react-intl';

import AppState from '../state/AppState.jsx';
import Common from '../common/index.jsx';

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.generateClassName = this.generateClassName.bind(this);
        Common.EventProxy.on('ActiveModule', (value) => {
            this.forceUpdate();
        });
    }

    componentWillUnmount(){
        Common.EventProxy.off('ActiveModule');
    }

    clickSideItem(_am) {
        AppState.changeState('ActiveModule', _am); 
    }

    generateClassName(_itemName) {
        if (AppState.ActiveModule == _itemName) {
            return 'active';
        } else {
            return '';
        }
    }

    render() {
        return (
            <div className="sidebar sidebar-bg-black" data-color="purple" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo">
                    <div className="simple-text">
                        <FormattedMessage id='dashboard.productname' />
                    </div>
                </div>

                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className={this.generateClassName('dashboard')}>
                            <a href="#" onClick={this.clickSideItem.bind(this, 'dashboard')}>
                                <i className="fa fa-th-large"></i>
                                <p>
                                    <FormattedMessage id='dashboard.sidebar.dashboard' />
                                </p>
                            </a>
                        </li>
                        <li className={this.generateClassName('lutang')}>
                            <a href="#" onClick={this.clickSideItem.bind(this, 'lutang')}>
                                <i className="fa fa-free-code-camp fa-2"></i>
                                <p>
                                    <FormattedMessage id='dashboard.sidebar.lutang' />
                                </p>
                            </a>
                        </li>
                        <li className={this.generateClassName('shouremian')}>
                            <a href="#" onClick={this.clickSideItem.bind(this, 'shouremian')}>
                                <i className="fa fa-fire fa-2"></i>
                                <p>
                                    <FormattedMessage id='dashboard.sidebar.shouremian' />
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default SideBar;