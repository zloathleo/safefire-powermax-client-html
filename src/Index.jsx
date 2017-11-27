
import React from 'react';
import ReactDOM from 'react-dom';

import Common from './common/index.jsx';
import { NavBar, SideBar, Content, Footer } from './dashboard/index.jsx';

import './css/common.css';
import './css/custom.css';

//i18n
import { IntlProvider, addLocaleData } from 'react-intl';
import zh_CN from './i18n/zh.js';
import zhLocaleData from 'react-intl/locale-data/zh';
//sim
import DataSim from './mock/DataSim.jsx';

addLocaleData(zhLocaleData);

class Index extends React.Component {

    constructor(props) {
        super(props);
        let isMock = true;
        if (isMock) {
            //模拟数据开关
            DataSim.init();
        }
    }

    componentWillMount() {
        // Common.MyFetch.fetch('http://localhost/test.json', { method: 'GET' }, function (json) {
        //     console.log(json);
        // });

    }

    render() {
        return (
            <IntlProvider locale='zh' messages={zh_CN}>
                <div className="wrapper">
                    <SideBar />
                    <div className="main-panel">
                        <NavBar />
                        <div className="content">
                            <div className="container-fluid">
                                <Content />
                            </div>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div >
            </IntlProvider>
        )
    }

}

ReactDOM.render(<Index />, document.getElementById('root'));