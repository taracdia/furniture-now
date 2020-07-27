import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavbarToggler, Collapse, Container, Row, Label, Col, Navbar, NavItem, Button, ButtonGroup, Form, FormGroup, Input, DropdownToggle, DropdownMenu, Dropdown, UncontrolledTooltip } from "reactstrap";
import { baseUrl } from "../shared/baseUrl"
import FURNITURE_TYPES from "../shared/furnitureTypes"

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    closeNav() {
        this.setState({
            isNavOpen: false
        })
    }


    render() {
        const furnitureTypeNavs = FURNITURE_TYPES.map(type => {
            return (
                <NavItem
                    key={type}
                >
                    <NavLink
                        onClick={() => this.closeNav()}
                        className="nav-link"
                        to={"/furnitureType/" + type}>{type}
                    </NavLink>
                </NavItem>
            )
        });

        return (
            <React.Fragment>
                <header>
                    <Container
                        className="p-0"
                    >
                        <Row className="justify-content-between">
                            <Col xs={"auto"}>
                                <NavLink to="/home">
                                    <Row className="align-items-center">
                                        <Col xs={"auto"}
                                            className="pr-0">
                                            <img src={baseUrl + "img/logo.svg"} alt="logo" height="80px" />
                                        </Col>
                                        <Col>
                                            <h1>FurnitureNow!</h1>
                                        </Col>
                                    </Row>
                                </NavLink>

                            </Col>
                            <Col xs={"auto"} className="align-self-end">
                                <NavLink id="cartLink" className="btn btn-link" role="button" data-toggle="tooltip" data-placement="top" title="Checkout" to="/checkout">
                                    <i className="fa fa-shopping-cart"></i><span className="pl-1">{this.props.furnitures.furnitures.reduce((accumulator, item) => accumulator + item.quantity, 0)}</span>
                                </NavLink>
                                <UncontrolledTooltip placement="bottom" target="cartLink">
                                    Cart
        </UncontrolledTooltip>
                            </Col>
                        </Row>
                    </Container>
                </header>
                <Navbar dark sticky="top" expand="md">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink onClick={this.closeNav} className="nav-link" to="/home">Home</NavLink>
                            </NavItem>
                            {furnitureTypeNavs}
                            <NavItem>
                                <NavLink onClick={this.closeNav} className="nav-link" to="/checkout">
                                    Checkout
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Login
                            logIn={this.props.logIn}
                            users={this.props.users}
                            closeNav={() => this.closeNav()}
                        />
                    </Collapse>
                </Navbar>

            </React.Fragment>
        );
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.toggleOpen = this.toggleOpen.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.closeNavAndLogin = this.closeNavAndLogin.bind(this);

        this.state = {
            isLoginOpen: false,
            passErrorMessage: ""
        }
    }
    handleLogin(e) {
        if (e.target.loginPassword.value === "") {
            this.setState({
                passErrorMessage: "Password needed"
            });
        } else {
            this.props.logIn(e.target.loginEmail.value, e.target.loginPassword.value);
            this.closeNavAndLogin();
        }
    }

    closeNavAndLogin(){
        this.setState({
            isLoginOpen: false
        });
        this.props.closeNav();
    }

    toggleOpen() {
        this.setState({
            isLoginOpen: !this.state.isLoginOpen
        })
    }

    render() {
        if (this.props.users.isLoggedIn && this.props.users.user && this.props.users.user.email) {
            return (
                <p className="mb-0 welcomeMessage" >Welcome, {this.props.users.user.email}</p>
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
                                <Label htmlFor="loginEmail">Email address</Label>
                                <Input type="email" id="loginEmail"
                                    placeholder="email@example.com"
                                    innerRef={input => this.loginEmail = input}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="loginPassword">Password</Label>
                                <Input type="password" id="loginPassword"
                                    placeholder="Password"
                                    innerRef={input => this.loginPassword = input}
                                    />
                                <p className="errorMessage">{this.state.passErrorMessage}</p>
                            </FormGroup>
                            <FormGroup></FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <ButtonGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                                <NavLink to="/register">
                                    <Button onClick={() => this.closeNavAndLogin()}>
                                        New User?
                                </Button>
                                </NavLink>
                            </ButtonGroup>
                        </Form>
                    </DropdownMenu>
                </Dropdown>
            );
        }
    }
}

export default Header;


