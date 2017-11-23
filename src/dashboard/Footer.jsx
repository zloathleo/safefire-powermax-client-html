import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="#">
                                    Home
                    </a>
                            </li>
                            <li>
                                <a href="#">
                                    Company
                    </a>
                            </li>
                            <li>
                                <a href="#">
                                    Portfolio
                    </a>
                            </li>
                            <li>
                                <a href="#">
                                    Blog
                    </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        &copy; <script>document.write(new Date().getFullYear())</script> <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer;