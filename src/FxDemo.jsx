
import React from 'react';
import ReactDOM from 'react-dom';

import Common from './common/index.jsx';
 
class FxDemo extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('Common', Common);

        MyFetch.fetch('http://localhost/test.json', { method: 'GET' }, function (json) {
            console.log(json);
        });
    }

    render() {
        return (
            <div className="block block-themed animated bounceIn">
                <div className="block-content block-content-full block-content-narrow">
                    <h1 className="h2 font-w600 push-5">RodinX1</h1>
                    <p>Please enter the password.</p>

                    <div className="row push-50-t">
                        <div className="col-xs-12">
                            <div className="form-material form-material-primary">
                                <input ref={(_ref) => this.inputPassword = _ref} className="form-control" type="password" placeholder="Enter the admin password.." />
                                <label for="register-password">Password</label>

                                <button className="btn btn-square btn-primary" onClick={_java_alert}>
                                    <i className="glyphicon glyphicon-cog"></i> java call js
                                </button>

                                <button className="btn btn-square btn-primary" onClick={_app_instance_app_exit}>
                                    <i className="glyphicon glyphicon-cog"></i> js call java
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

ReactDOM.render(<FxDemo />, document.body);