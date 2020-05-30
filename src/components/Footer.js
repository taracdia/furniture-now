import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Button, Form, FormGroup, Label, Input, Col } from "reactstrap";


function Footer() {
    return (
        <footer>
            <Container>
                <Row className="justify-content-between pt-4 px-5">
                    <Col xs={"auto"}>
                        <h5>Affiliates</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to="example.com">ElectronicsNow!</NavLink></li>
                            <li><NavLink to="example.com">EntertainmentNow!</NavLink></li>
                            <li><NavLink to="example.com">BooksNow!</NavLink></li>
                            <li><NavLink to="example.com">SportsNow!</NavLink></li>
                        </ul>
                    </Col>
                    <Col xs={"auto"}>
                        <h5>Connect with Us</h5>
                        <NavLink className="btn btn-social-icon btn-instagram" to="http://instagram.com/"><i
                            className="fa fa-instagram"></i></NavLink>
                        <NavLink className="btn btn-social-icon btn-facebook" to="http://facebook.com/"><i
                            className="fa fa-facebook"></i></NavLink>
                        <NavLink className="btn btn-social-icon btn-twitter" to="http://twitter.com/"><i
                            className="fa fa-twitter"></i></NavLink>
                        <NavLink className="btn btn-social-icon btn-google" to="http://youtube.com/"><i
                            className="fa fa-youtube"></i></NavLink>
                    </Col>
                    <Col xs={"auto"}>
                        <h5>Contact Us</h5>
                        <NavLink role="button" className="btn btn-link" to="tel:+15125558971"><i className="fa fa-phone"></i>
                        1-512-555-8971</NavLink><br />
                        <NavLink role="button" className="btn btn-link" to="mailto:furniture@now.com"><i
                            className="fa fa-envelope-o"></i> furniture@now.com</NavLink>
                    </Col>
                </Row>
                <Row className="justify-content-around p-4">
                    <Col xs={"auto"}>
                        <i className="fa fa-copyright"></i> FurnitureNow!, Inc.
                        </Col>
                    <Col xs={"auto"}>
                        <NavLink to="#">Terms</NavLink>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
