import React from 'react';
import { FormattedMessage } from 'react-intl';

class SideBar extends React.Component {

    constructor(props) {
        super(props);
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
                        <li className="active">
                            <a href="#">
                                <i className="fa fa-th-large"></i>
                                <p>
                                    <FormattedMessage id='dashboard.overview' />
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-free-code-camp fa-2"></i>
                                <p>
                                    <FormattedMessage id='dashboard.chuihuiqi.lutang' />
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-fire fa-2"></i>
                                <p>
                                    <FormattedMessage id='dashboard.chuihuiqi.shouremian' />
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