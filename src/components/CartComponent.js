import React, { Component } from "react";
import { Container, Row, Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import Quantity from "./QuantityComponent";

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isErrorMessageDisplayed: false
        }
    }

    handleCouponSubmit(event) {

        event.preventDefault();
    }

    render() {
        const props = this.props
        const furnitures = props.furnitureItems.filter(furniture => furniture.quantity > 0).map(furniture => {
            return (
                <CartItem
                    furniture={furniture}
                    setMultipleFurnitures={props.setMultipleFurnitures}
                />
            );
        });

        const discountMessage = props.isCouponApplied ? (
            <Row>
                <Col>
                    <p id="discountAppliedMessage">30% Discount Applied!</p>
                </Col>
            </Row>
        ) : "";
        // <Row>
        //     <Col>
        //     <p className="d-none errorMessage">Invalid coupon</p>
        //     </Col>
        // </Row>

        const priceMessage = props.isCouponApplied ? (
            <Row>
                <Col>
                    <p>Your total is: $<del id="oldPrice">{props.totalPrice}</del> <span id="totalPriceCart">{props.totalPrice * .3}</span></p>
                </Col>
            </Row>
        ) : (
                <Row>
                    <Col>
                        <p>Your total is: ${props.totalPrice}</p>
                    </Col>
                </Row>
            );

        if (furnitures.length > 0) {
            return (
                <Container>
                    <Row className="pb-4">
                        <h4>Your cart contains:</h4>
                    </Row>
                    {furnitures}
                    <Row>
                        <Col>
                            <p id="cartShippingCost">$0</p>
                        </Col>
                    </Row>
                    {/* <Form onSubmit={this.handleSubmit}> */}
                    <Form>

                        <FormGroup row>
                            <Col xs={"auto"}>
                                <Input type="text" className="form-control" id="inputCoupon" placeholder="Coupon Code (Optional)" />
                            </Col>
                            <Col xs={"auto"}>
                                <Button type="submit" className="orangeButton">Add Coupon</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                    {discountMessage}
                    <hr />
                    {priceMessage}
                </Container>
            );
        } else {
            return (
                <Container>
                    <Row>
                        <Col>
                            <h3>Your cart is empty.</h3>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

class CartItem extends Component {
    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);

        this.state = {
            quantity: this.props.furniture.quantity
        }
    }
    delete() {
        this.props.setMultipleFurnitures(this.props.furniture, +0);
    }

    increase() {
        const value = +this.state.quantity + 1;

        this.setState({
            quantity: value
        });
        this.props.setMultipleFurnitures(this.props.furniture, value);
    }

    decrease() {
        const value = +this.state.quantity - 1;
        if (value > 0) {
            this.setState({
                quantity: value
            });
            this.props.setMultipleFurnitures(this.props.furniture, value);
        }
    }

    handleInputChange(e) {
        const value = +e.target.value;

        this.setState({
            quantity: value
        });
        this.props.setMultipleFurnitures(this.props.furniture, value);
    }

    render() {
        const furniture = this.props.furniture;
        return (
            <Row className="align-items-center pb-5">
                <Col xs={"auto"}>
                    <Button
                        onClick={this.delete}
                        className="orangeButton"
                        type="button"
                    >
                        &times;
                    </Button>
                </Col>
                <Col-4 xl="7">
                    <img
                        className="cartImg"
                        src={furniture.image} />
                </Col-4>
                <Col>
                    <p>{furniture.name}: ${furniture.price}</p>
                </Col>
                <Quantity
                    furniture={furniture}
                    setMultipleFurnitures={this.props.setMultipleFurnitures}
                />
            </Row>
        );
    }
}

export default Cart;