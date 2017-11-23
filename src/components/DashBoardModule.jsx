import React from 'react';
import { FormattedMessage } from 'react-intl';

import Common from '../common/index.jsx';
import DashBoardSummaryCardPane from './DashBoardSummaryCardPane.jsx';
import DashBoardInfoCardPane from './DashBoardInfoCardPane.jsx';

class DashBoardModule extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: 0 };
    }

    componentWillMount() {
        Common.MyFetch.fetch('/dashboard', { method: 'GET' }, function (_json) {
            this.setState({ data: _json });
        }.bind(this));
    }

    render() {
        let _data = this.state.data;
        if (_data) {
            return (
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <DashBoardSummaryCardPane data={_data.summary} />
                            </div>

                            <div className="col-xs-6 col-sm-4 col-lg-3">
                                <DashBoardInfoCardPane data={_data.kongyuqi} />
                            </div>
                            <div className="col-xs-6 col-sm-4 col-lg-3">
                                <DashBoardInfoCardPane data={_data.kongyuqi} />
                            </div>
                            <div className="col-xs-6 col-sm-4 col-lg-3">
                                <DashBoardInfoCardPane data={_data.kongyuqi} />
                            </div>
                            <div className="col-xs-6 col-sm-4 col-lg-3">
                                <DashBoardInfoCardPane data={_data.kongyuqi} />
                            </div>
                            <div className="col-xs-6 col-sm-4 col-lg-3">
                                <DashBoardInfoCardPane data={_data.kongyuqi} />
                            </div>
                            <div className="col-xs-6 col-sm-4 col-lg-3">
                                <DashBoardInfoCardPane data={_data.kongyuqi} />
                            </div>
                            <div className="col-xs-6 col-sm-4 col-lg-3">
                                <DashBoardInfoCardPane data={_data.kongyuqi} />
                            </div>
                            <div className="col-xs-6 col-sm-4 col-lg-3">
                                <DashBoardInfoCardPane data={_data.kongyuqi} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<div className="content">  </div>);
        }
    }

}

export default DashBoardModule;