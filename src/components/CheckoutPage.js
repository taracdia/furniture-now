import React, { Component } from 'react';
import CartComponent from './CartComponent.js';
import CheckoutForm from "./CheckoutForm";
import { Col, Row, Container } from 'reactstrap';

class CheckoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartEmpty: false,
            isLoggedIn: false,
            isThankDisplayed: false
        }
    }

    // todo: make it so that when these are true these messages are shown

    render() {
        const loggedInMessage = this.state.isLoggedIn ? (
            <Row>
                <Col>
                    <h3>You are logged in!</h3>
                </Col>
            </Row>
        ) : "";
        if (this.state.isThankDisplayed) {
            return (
                <Row>
                    <Col>
                        <h3>Thank you for shopping with FurnitureNow!</h3>
                    </Col>
                </Row>
            );
        } else if (this.state.isCartEmpty) {
            return (
                <Row>
                    <Col>
                        <h3>Your cart is empty</h3>
                    </Col>
                </Row>
            );
        } else {
            return (
                <Container className="py-5">
                    {loggedInMessage}
                    <Row>
                        <Col xl={5} pb-xl={1} pb={5}>
                            <CartComponent />
                        </Col>
                        <Col xl={7} pt-xl={1} pt={5}>
                            <CheckoutForm />
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default CheckoutPage;