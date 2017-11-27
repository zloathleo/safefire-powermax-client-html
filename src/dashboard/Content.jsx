import React from 'react';

import AppState from '../state/AppState.jsx';
import Common from '../common/index.jsx';
import DashBoardModule from '../components/DashBoardModule.jsx';
import LuTangModule from '../components/LuTangModule.jsx';

class Content extends React.Component {

    constructor(props) {
        super(props);

        Common.EventProxy.on('ActiveModule', (value) => {
            this.forceUpdate();
        });
    }

    render() {
        if (AppState.ActiveModule == 'dashboard') {
            return (
                <DashBoardModule />
            )
        } else if (AppState.ActiveModule == 'lutang') {
            return <LuTangModule />;
        } else {
            return null;
        }

    }
}

export default Content;