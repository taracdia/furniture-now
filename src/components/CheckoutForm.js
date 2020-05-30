import React, { Component } from "react";
import { Button, Row, Col } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const exactLength = len => val => val && (val.length === len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipcode: "",
            cardName: "",
            securityCode: "",
            cardNumber: "",
            cardType: "Visa",
            shipType: "Free Shipping +$0.00"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleShippingChange(event) {
        //todo: make it work
        let shipCost = 0.0;
        if (event.target.value === "Fast Shipping +$2.00") {
            shipCost = 2.0;
        } else if (event.target.value === "Faster Shipping +$5.00") {
            shipCost = 5.0;
        }
        this.setState({
            shippingPrice: shipCost
        });
    }

    handleSubmit(event) {
        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <LocalForm onSubmit={this.handleSubmit}>
                <div className="pb-5">
                    <Row className="form-group">
                        <Col xs="12" sm="6">
                            <Control.text
                                model=".firstName"
                                id="firstName"
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
                                id="lastName"
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
                                id="email"
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
                            <Control.text
                                model=".address1"
                                id="address1"
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
                                id="address2"
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
                                id="city"
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
                                id="state"
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
                                id="zipcode"
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
                </div>
                <Row className="form-group">
                    <Col xs="12" lg="9">
                        <Control.text
                            model=".cardName"
                            id="cardName"
                            name="cardName"
                            placeholder="Name on Card"
                            className="form-control"
                            validators={{
                                required
                            }}
                        />
                        <Errors
                                className="text-danger"
                                model=".cardName"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required'
                                }}
                            />
                    </Col>
                    <Col xs="6" lg="3" className="order-lg-2 order-2">
                        <Control.text
                            model=".securityCode"
                            id="securityCode"
                            name="securityCode"
                            placeholder="Security Code"
                            className="form-control"
                            validators={{
                                required,
                                isNumber,
                                exactLength: exactLength(3)
                            }}
                        />
                        <Errors
                                className="text-danger"
                                model=".securityCode"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    isNumber: "Numbers only",
                                    exactLength: "Must be exactly 3 numbers"
                                }}
                            />
                    </Col>

                    <Col xs="12" className="order-lg-3 order-4">
                        <Control.text
                            model=".cardNumber"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="Card Number"
                            className="form-control"
                            validators={{
                                required,
                                isNumber,
                                minLength: minLength(13),
                                maxLength: maxLength(19)
                            }}
                        />
                        <Errors
                                className="text-danger"
                                model=".cardNumber"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    isNumber: "Numbers only",
                                    minLength: "Must be at least 13 numbers",
                                    maxLength: "Must be 19 numbers or less"
                                }}
                            />
                    </Col>
                    <Col xs="6" className="order-lg-4 order-3">
                        <Control.select
                            model=".cardType"
                            id="cardType"
                            name="cardType"
                            className="form-control"
                        >
                            <option defaultValue>Visa</option>
                            <option>American Express</option>
                        </Control.select>
                    </Col>
                    <Col xs="12" lg="6">
                        <Control.select
                            model=".shipType"
                            id="shipType"
                            name="shipType"
                            className="form-control"
                        >
                            <option defaultValue>Free Shipping +$0.00</option>
                            <option>Fast Shipping +$2.00</option>
                            <option>Faster Shipping +$5.00</option>
                        </Control.select>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col xs={"auto"}>
                        <Button type="submit" color="primary">Confirm Purchase</Button>
                    </Col>
                    <Col>
                        <Button color="warning" href="index.html" role="button">Cancel</Button>
                    </Col>
                </Row>
            </LocalForm>
        );
    }
}

export default CheckoutForm;