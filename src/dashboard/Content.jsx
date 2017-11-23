import React from 'react';
import AppState from '../state/AppState.jsx';
import DashBoardModule from '../components/DashBoardModule.jsx';
class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (AppState.ActiveModule == 'dashboard') {
            return (
                <DashBoardModule />
            )
        } else {
            return null;
        }

    }
}

export default Content;