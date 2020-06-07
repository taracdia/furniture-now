import React from "react";
import { Container, Row, Button, Form, FormGroup, Input, Col } from "reactstrap";
import CartItem from "./CartItemComponent";

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isErrorMessageDisplayed: false,
            couponInput: ""
        }
        this.handleCouponSubmit = this.handleCouponSubmit.bind(this)
        this.onCouponInputChange = this.onCouponInputChange.bind(this)
    }

    handleCouponSubmit(e) {
        e.preventDefault();
        if (this.state.couponInput === "DEAL") {
            this.props.applyCoupon();
            this.setState({ isErrorMessageDisplayed: false });
        } else {
            this.setState({ isErrorMessageDisplayed: true });
        }
    }

    onCouponInputChange(e) {
        this.setState({ couponInput: e.target.value })
    }

    render() {
        const { furnitures, setFurnitureQuantity, checkoutOptions } = this.props;
        

        const combinedPrice = furnitures.reduce((accumulator, furniture) => accumulator + (furniture.quantity * furniture.price), 0) + checkoutOptions.shippingCost;

        const discountMessage = checkoutOptions.couponApplied ? (
            <Row>
                <Col>
                    <p id="discountAppliedMessage">30% Discount Applied!</p>
                </Col>
            </Row>
        ) : "";

        const errorMessage = this.state.isErrorMessageDisplayed ?
            (<Row>
                <Col>
                    <p className="errorMessage">Invalid coupon</p>
                </Col>
            </Row>) : "";

        const priceMessage = checkoutOptions.couponApplied ? (
            <Row>
                <Col>

                    <p>Your total is: $<del>{combinedPrice.toFixed(2)}</del> ${(combinedPrice * .7).toFixed(2)}</p>
                </Col>
            </Row>
        ) : (
                <Row>
                    <Col>
                        <p>Your total is: ${combinedPrice.toFixed(2)}</p>
                    </Col>
                </Row>
            );
        if (furnitures.length === 0) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <h3>Your cart is empty.</h3>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return (
                <Container>
                    <Row className="pb-4">
                        <h4>Your cart contains:</h4>
                    </Row>
                    {furnitures.filter(furniture => furniture.quantity > 0).map(furniture => {
            return (
                <CartItem
                    furniture={furniture}
                    setFurnitureQuantity={setFurnitureQuantity}
                    key={furniture.id}
                />
            );
        })}
                    <Row>
                        <Col>
                            <p>Shipping: ${checkoutOptions.shippingCost.toFixed(2)}</p>
                        </Col>
                    </Row>
                    <Form onSubmit={this.handleCouponSubmit}>
                        <FormGroup row>
                            <Col xs={"auto"}>
                                <Input type="text" className="form-control" onChange={this.onCouponInputChange} placeholder="Coupon Code (Optional)" />
                            </Col>
                            <Col xs={"auto"}>
                                <Button type="submit" className="orangeButton">Add Coupon</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                    {discountMessage}
                    {errorMessage}
                    <hr />
                    {priceMessage}
                </Container>

            );
        }
    }
}



export default Cart;