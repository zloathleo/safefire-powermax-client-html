import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { FormattedMessage } from 'react-intl';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-transparent navbar-absolute">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Dashboard</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <DropdownButton id="dropdown-btn-menu1" bsStyle={"primary"} noCaret={true} title={<i className="fa fa-user"></i>}>
                                    <MenuItem key="1">Dropdown link</MenuItem>
                                    <MenuItem key="2">Dropdown link</MenuItem>
                                </DropdownButton>
                            </li>
                            <li>
                                <DropdownButton id="dropdown-btn-menu2" bsStyle={"primary"} noCaret={true} title={<i className="fa fa-bell"></i>}>
                                    <MenuItem key="1">Mike John responded to your email</MenuItem>
                                    <MenuItem key="2">You have 5 new tasks</MenuItem>
                                </DropdownButton>
                            </li>
                            <li>
                                <DropdownButton id="dropdown-btn-menu3" bsStyle={"primary"} noCaret={true} title={<i className="fa fa-bell"></i>}>
                                    <MenuItem key="1">Mike John responded to your email</MenuItem>
                                    <MenuItem key="2">You have 5 new tasks</MenuItem>
                                </DropdownButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;