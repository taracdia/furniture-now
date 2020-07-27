import React from "react";
import { Container, Row, Col, Button, NavLink } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const exactLength = len => val => val && (val.length === len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const noMatch = val => confirmVal => val.localeCompare(confirmVal) === 0;


class RegisterUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
        this.state = {
            password: ""
        }
    }

    handleSubmit(input) {
        //this creates a new object with all of the data from the input except for the confirmPassword field
        const { confirmPassword, ...user } = input;
        this.props.createUser(user);
    }

    handlePasswordUpdate(event) {
        this.setState({ password: event.target.value });
    }


    render() {
        return (
            <Container className="entirePage">
                <LocalForm onSubmit={this.handleSubmit}>
                    <Row className="form-group">
                        <Col xs="12" sm="6">
                            <Control.text
                                model=".firstName"
                                name="firstName"
                                placeholder="First Name"
                                className="form-control"
                                validators={{
                                    required
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".firstName"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required'
                                }}
                            />
                        </Col>
                        <Col xs="12" sm="6">
                            <Control.text
                                model=".lastName"
                                name="lastName"
                                placeholder="Last Name"
                                className="form-control"
                                validators={{
                                    required
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".lastName"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Control.text
                                model=".email"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                validators={{
                                    required,
                                    validEmail
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    validEmail: "Invalid Email"
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Control.password
                                model=".password"
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.handlePasswordUpdate}
                                validators={{
                                    required,
                                    minLength: minLength(6),
                                    maxLength: maxLength(14)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".password"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    minLength: "Must be at least 6 characters",
                                    maxLength: "Can't be more than 14 characters"
                                }}
                            />
                        </Col>
                        <Col>
                            <Control.password
                                model=".confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="form-control"

                                validators={{
                                    required,
                                    noMatch: noMatch(this.state.password)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".confirmPassword"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    noMatch: "Passwords must match"
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Control.text
                                model=".address1"
                                name="address1"
                                placeholder="Address"
                                className="form-control"
                                validators={{
                                    required
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".address1"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Control.text
                                model=".address2"
                                name="address2"
                                placeholder="Apartment, studio, or floor (optional)"
                                className="form-control"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col xs="12" md="4">
                            <Control.text
                                model=".city"
                                name="city"
                                placeholder="City"
                                className="form-control"
                                validators={{
                                    required
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".city"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required'
                                }}
                            />
                        </Col>
                        <Col xs="12" sm="6" md="4">
                            <Control.text
                                model=".state"
                                name="state"
                                placeholder="State"
                                className="form-control"
                                validators={{
                                    required
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".state"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required'
                                }}
                            />
                        </Col>
                        <Col xs="12" sm="6" md="4">
                            <Control.text
                                model=".zipcode"
                                name="zipcode"
                                placeholder="Zipcode"
                                className="form-control"
                                validators={{
                                    required,
                                    isNumber,
                                    exactLength: exactLength(5)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".zipcode"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    isNumber: "Numbers only",
                                    exactLength: "Must be exactly 5 numbers"
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col xs={"auto"}>
                            <NavLink to="/home">
                                <Button type="submit" color="primary">Confirm Purchase</Button>
                            </NavLink>
                        </Col>
                        <Col>
                            <NavLink to="/home">
                                <Button color="warning">Cancel</Button>
                            </NavLink>
                        </Col>
                    </Row>
                </LocalForm>
            </Container>

        );
    }
}


export default RegisterUserPage;