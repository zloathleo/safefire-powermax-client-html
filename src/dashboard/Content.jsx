import React from 'react';

import AppState from '../state/AppState.jsx';
import Common from '../common/index.jsx';
import DashBoardModule from '../components/DashBoardModule.jsx';
import LuTangModule from '../components/LuTangModule.jsx';
import LuTangBeiHuCeModule from '../components/LuTangBeiHuCeModule.jsx';
import ShouReMianModule from '../components/ShouReMianModule.jsx';

class Content extends React.Component {

    constructor(props) {
        super(props);

        Common.EventProxy.on('ActiveModule', (value) => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        Common.EventProxy.off('ActiveModule');
    }


    render() {
        if (AppState.ActiveModule == 'dashboard') {
            return <DashBoardModule />;
        } else if (AppState.ActiveModule == 'lutang') {
            return <LuTangModule />;
        } else if (AppState.ActiveModule == 'lutangbeihuice') {
            return <LuTangBeiHuCeModule />;
        } else if (AppState.ActiveModule == 'shouremian') {
            return <ShouReMianModule />;
        } else {
            return null;
        }

    }
}

export default Content;