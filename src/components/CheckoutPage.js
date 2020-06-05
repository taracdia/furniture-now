import React from "react";
import Cart from "./CartComponent.js";
import CheckoutForm from "./CheckoutForm";
import { Col, Row, Container } from "reactstrap";
import { FadeTransform } from 'react-animation-components';
import {Loading} from "./LoadingComponent"

function CheckoutPage(props) {
    // todo: make it so that when these are true these messages are shown
    if (props.checkoutOptions.checkoutFinished) {
        return (
            <Container className={"my-4 py-4"}>
                <Row className={"my-4 py-4 justify-content-center"} >
                    <Col>
                        <h3>Thank you for shopping with FurnitureNow!</h3>
                    </Col>
                </Row>
            </Container>
        );
    } else if (props.furnitures.isLoading) {
        return (
            <Container className={"my-4 py-4"}>
                <Row className={"my-4 py-4 justify-content-center"} >                
                    <Loading />
                </Row>
            </Container>
        );
    } else if (props.furnitures.errMess) {
        return (
            <Container className={"my-4 py-4"}>
                <Row className={"my-4 py-4 justify-content-center"} >
                    <Col>
                        <h3>{props.furnitures.errMess}</h3>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(50%)'
                }}>
                <Container className="py-5">
                    <Row>
                        <Col xl={5} pb-xl={1} pb={5}>
                            <Cart
                                furnitures={props.furnitures.furnitures}
                                setFurnitureQuantity={props.setFurnitureQuantity}
                                applyCoupon={props.applyCoupon}
                                checkoutOptions={props.checkoutOptions}
                            />
                        </Col>
                        <Col xl={7} pt-xl={1} pt={5}>
                            <CheckoutForm
                                changeShippingCost={props.changeShippingCost}
                                loggedIn={props.loggedIn}
                            />
                        </Col>
                    </Row>
                </Container>
            </FadeTransform>
        );
    }

}

export default CheckoutPage;