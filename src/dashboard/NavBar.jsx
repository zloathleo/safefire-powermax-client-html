import React from 'react';  
import { FormattedMessage } from 'react-intl';

import AppState from '../state/AppState.jsx';
import Common from '../common/index.jsx';

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        Common.EventProxy.on('ActiveModule', (value) => {
            this.forceUpdate();
        });
    }

    componentWillUnmount(){
        Common.EventProxy.off('ActiveModule');
    }

    render() {
        return (
            <nav className="navbar navbar-transparent navbar-absolute">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand"><FormattedMessage id={'dashboard.sidebar.' + AppState.ActiveModule} /></div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;