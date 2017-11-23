import React from 'react';

class SideBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar sidebar-bg-black" data-color="purple" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text">
                        Creative Tim
				</a>
                </div>

                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="active">
                            <a href="dashboard.html">
                                <i className="fa fa-th-large"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <a href="user.html">
                                <i className="fa fa-th-large"></i>
                                <p>User Profile</p>
                            </a>
                        </li>

                        <li id="faq1" >
                            <a data-toggle="collapse" data-parent="#faq1" data-target="#formsExamples" href="#formsExamples" aria-expanded="false">
                                <i className="fa fa-th-large"></i>
                                <p>Forms
                                <b className="caret"></b>
                                </p>
                            </a>
                            <div className="collapse" id="formsExamples" aria-expanded="false">
                                <ul className="nav">
                                    <li>
                                        <a href="../forms/regular.html">
                                            <span className="sidebar-mini">RF</span>
                                            <span className="sidebar-normal">Regular Forms</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../forms/extended.html">
                                            <span className="sidebar-mini">EF</span>
                                            <span className="sidebar-normal">Extended Forms</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../forms/validation.html">
                                            <span className="sidebar-mini">VF</span>
                                            <span className="sidebar-normal">Validation Forms</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../forms/wizard.html">
                                            <span className="sidebar-mini">W</span>
                                            <span className="sidebar-normal">Wizard</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }

}

export default SideBar;