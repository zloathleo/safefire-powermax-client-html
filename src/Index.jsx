
import React from 'react';
import ReactDOM from 'react-dom';

import Common from './common/index.jsx';
import { NavBar, SideBar, Content, Footer } from './dashboard/index.jsx';

import './css/common.css';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('Common', Common);

        // Common.MyFetch.fetch('http://localhost/test.json', { method: 'GET' }, function (json) {
        //     console.log(json);
        // });

    }

    render() {
        return (
            <div className="wrapper">
                <SideBar />
                <div className="main-panel">
                    <NavBar />
                    <Content />
                    <Footer />
                </div>
            </div >
        )
    }

}

ReactDOM.render(<Index />, document.getElementById('root'));