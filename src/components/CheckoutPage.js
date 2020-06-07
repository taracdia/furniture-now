import React from "react";
import Cart from "./CartComponent.js";
import CheckoutForm from "./CheckoutForm";
import { Col, Row, Container } from "reactstrap";
import { FadeTransform } from 'react-animation-components';
import { Loading } from "./LoadingComponent"

function CheckoutPage(props) {
    if (!props.checkoutOptions.checkoutFinished) {
        return (

            <h3 className="entirePage">Thank you for shopping with FurnitureNow!</h3>

        );
    } else if (props.furnitures.isLoading) {
        return (
            <div className="entirePage">
                <Loading />
            </div>
        );
    } else if (props.furnitures.errMess) {
        return (
            <h3 className="entirePage">{props.furnitures.errMess}</h3>
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
                                finishCheckout={props.finishCheckout}
                            />
                        </Col>
                    </Row>
                </Container>
            </FadeTransform>
        );
    }

}

export default CheckoutPage;