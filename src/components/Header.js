import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { Nav, NavbarToggler, Collapse, Container, Row, Label, Col, Navbar, NavItem, Button, Form, FormGroup, Input, DropdownToggle, DropdownMenu, Dropdown } from "reactstrap";
import { baseUrl } from "../shared/baseUrl"

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }


    render() {
        // $("[data-toggle="tooltip"]").tooltip();
        // $("[data-toggle="popover"]").popover();

        return (
            <React.Fragment>
                <header>
                    <Container>
                        <Row className="justify-content-between">
                            <Col sm={"auto"} className="col">
                                {/* todo: make it so when you mouse over the link it has underlined in orange not blue */}
                                <NavLink to="/home">
                                    <Row className="align-items-center">
                                        <Col>
                                            <img src={baseUrl + "img/logo.svg"} alt="logo" height="100px" />
                                        </Col>
                                        <Col>
                                            <h1>FurnitureNow!</h1>
                                        </Col>
                                    </Row>
                                </NavLink>

                            </Col>
                            <Col xs={"auto"} className="align-self-end">
                                {/* todo: tooltip */}
                                <NavLink id="cartLink" className="btn btn-link" role="button" data-toggle="tooltip" data-placement="top" title="Checkout" to="/checkout">
                                    <i className="fa fa-shopping-cart"></i><span className="pl-1"
                                        id="cartNum">{this.props.furnitureItems.furnitureItems.reduce((accumulator, item) => accumulator + item.quantity, 0)}</span>
                                </NavLink>
                            </Col>
                        </Row>
                    </Container>
                </header>
                {/* todo: fix link, and have it so when go to a page it goes to the top */}
                <Navbar dark sticky="top" expand="md">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/#tablesChairs">Tables and Chairs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/#couches">Couches</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/#beds">Beds</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/checkout">Checkout</NavLink>
                            </NavItem>
                        </Nav>
                        <Login
                            logIn={this.props.logIn}
                            loggedIn={this.props.loggedIn}
                        />
                    </Collapse>
                </Navbar>

            </React.Fragment>
        );
    }
}

class Login extends Component {
    constructor(props) {
        super(props);

        this.toggleOpen = this.toggleOpen.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            isLoginOpen: false,
            isErrorMessageShown: false
        }
    }
    handleLogin(e) {
        e.preventDefault();
        if (e.target.password.value !== "") {
            this.props.logIn(e.target.email.value);
        } else {
            this.setState({
                isErrorMessageShown: true
            })
        }
    }

    toggleOpen() {
        this.setState({
            isLoginOpen: !this.state.isLoginOpen
        })
    }

    render() {
        const errMess = this.state.isErrorMessageShown ?
            <p className="errorMessage">Password needed</p>
            : "";
        if (this.props.loggedIn.isLoggedIn) {
            return (
                <p className="mb-0" id="welcomeMessage">Welcome, {this.props.loggedIn.email}</p>
            );
        } else {
            return (
                <Dropdown isOpen={this.state.isLoginOpen} toggle={this.toggleOpen}>
                    <DropdownToggle className="orangeButton" caret>
                        Log in!
                    </DropdownToggle>
                    <DropdownMenu>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="email">Email address</Label>
                                <Input type="email" id="email"
                                    placeholder="email@example.com"
                                    innerRef={input => this.email = input}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password"
                                    placeholder="Password" />
                                {errMess}
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </DropdownMenu>
                </Dropdown>
            );
        }
    }
}

export default Header;