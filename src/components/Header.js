import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { Nav, NavbarToggler, Collapse, Container, Row, Label, Col, Navbar, NavItem, Button, Form, FormGroup, Input, DropdownToggle, DropdownMenu, Dropdown } from "reactstrap";

// $(".addToCart").click(function () {
//     $("#cartNum").html(++cartNum);
// });
// let isDealModalTriggered = false;

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
                                        <img src="img/logo.svg" alt="logo" height="100px" />
                                    </Col>
                                    <Col>
                                        <h1>FurnitureNow!</h1>
                                    </Col>
                                </Row>
                                </NavLink>

                            </Col>
                            <Col  xs={"auto"} className="align-self-end">
                                {/* todo: tooltip */}
                                <NavLink id="cartLink" className="btn btn-link" role="button" data-toggle="tooltip" data-placement="top" title="Checkout" to="/checkout">
                                    <i className="fa fa-shopping-cart"></i><span className="pl-1"
                                        id="cartNum">{this.props.furnitureItems.reduce((accumulator, item) => accumulator + item.quantity, 0)}</span>
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
                                <NavLink className="nav-link" to="/checkout">Check out</NavLink>
                            </NavItem>
                        </Nav>
                        <Login />
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
            isOpen: false,
            isLoggedIn: false
        }
    }
    handleLogin() {
        this.setState({
            isLoggedIn: true
        })
    }

    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <p className="mb-0" id="welcomeMessage">Welcome, {this.email.value}</p>
            );
        } else {
            return (
                <Dropdown isOpen={this.state.isOpen} toggle={this.toggleOpen}>
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
                                <Label htmlFor="loginPass">Password</Label>
                                <Input type="password" id="loginPass"
                                    placeholder="Password" />
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