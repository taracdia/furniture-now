import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row row-content justify-content-between pt-4 px-5">
                        <div className="col col-auto">
                            <h5>Affiliates</h5>
                            <ul className="list-unstyled">
                                <li><a href="example.com">ElectronicsNow!</a></li>
                                <li><a href="example.com">EntertainmentNow!</a></li>
                                <li><a href="example.com">BooksNow!</a></li>
                                <li><a href="example.com">SportsNow!</a></li>
                            </ul>
                        </div>
                        <div className="col col-auto">
                            <h5>Connect with Us</h5>
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i
                                className="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i
                                className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i
                                className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i
                                className="fa fa-youtube"></i></a>
                        </div>
                        <div className="col col-auto">
                            <h5>Contact Us</h5>
                            <a role="button" className="btn btn-link" href="tel:+15125558971"><i className="fa fa-phone"></i>
                        1-512-555-8971</a><br />
                            <a role="button" className="btn btn-link" href="mailto:furniture@now.com"><i
                                className="fa fa-envelope-o"></i> furniture@now.com</a>
                        </div>
                    </div>
                    <div className="row row-content justify-content-around p-4">
                        <div className="col col-auto">
                            <i className="fa fa-copyright"></i> FurnitureNow!, Inc.
                        </div>
                        <div className="col col-auto">
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
