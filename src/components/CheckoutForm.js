import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Col } from 'reactstrap';

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
            shippingPrice: 0.0,
            hasCoupon: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
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
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className="pb-5">
                    <FormGroup row>
                        <Col-12 sm="6">
                            <Input type="text" id="firstName" name="firstName"
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={this.handleInputChange} />
                        </Col-12>
                        <Col-12 sm="6">
                            <Input type="text" id="lastName" name="lastName"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                onChange={this.handleInputChange} />
                        </Col-12>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Input type="email" id="email" name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Input type="text" id="address1" name="address1"
                                placeholder="Address"
                                value={this.state.address1}
                                onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Input type="text" id="address2" name="address2"
                                placeholder="Apartment, studio, or floor (optional)"
                                value={this.state.address2}
                                onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col-12 md="4">
                            <Input type="text" id="city" name="city"
                                placeholder="City"
                                value={this.state.city}
                                onChange={this.handleInputChange} />
                        </Col-12>
                        <Col-12 sm="6" md="4">
                            <Input type="text" id="state" name="state"
                                placeholder="State"
                                value={this.state.state}
                                onChange={this.handleInputChange} />
                        </Col-12>
                        <Col-12 sm="6" md="4">
                            <Input type="text" id="zipcode" name="zipcode"
                                placeholder="Zipcode"
                                value={this.state.zipcode}
                                onChange={this.handleInputChange} />
                        </Col-12>
                    </FormGroup>
                </div>
                <FormGroup row>
                    <Col-12 lg="9">
                        <Input type="text" id="cardName" name="cardName"
                            placeholder="Name on Card"
                            value={this.state.cardName}
                            onChange={this.handleInputChange} />
                    </Col-12>
                    <Col-6 lg="3" className="order-lg-2 order-2">
                        <Input type="text" id="securityCode" name="securityCode"
                            placeholder="Security Code"
                            value={this.state.securityCode}
                            onChange={this.handleInputChange} />
                    </Col-6>

                    <Col-12 className="order-lg-3 order-4">
                        <Input type="text" id="cardNumber" name="cardNumber"
                            placeholder="Card Number"
                            value={this.state.cardNumber}
                            onChange={this.handleInputChange} />
                    </Col-12>
                    <Col-6 className="order-lg-4 order-3">
                        <Input type="select" name="cardType"
                            value={this.state.cardType}
                            onChange={this.handleInputChange}
                            >
                            <option>Visa</option>
                            <option>American Express</option>
                        </Input>
                    </Col-6>
                    <Col-12 lg="6">
                        <Input
                            type="select"
                            value={this.state.shippingPrice}
                            onChange={this.handleShippingChange}
                        >
                            <option defaultValue>Free Shipping +$0.00</option>
                            <option>Fast Shipping +$2.00</option>
                            <option>Faster Shipping +$5.00</option>
                        </Input>
                    </Col-12>
                </FormGroup>
                <FormGroup row>
                    <Col xs={"auto"}>
                        <Button type="submit" color="primary">Confirm Purchase</Button>
                    </Col>
                    <Col>
                        <Button color="warning" href="index.html" role="button">Cancel</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default CheckoutForm;