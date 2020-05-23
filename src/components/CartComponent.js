import React, { Component } from 'react';
import furnitureItems from '../shared/furnitureItems.js';
import { Container, Row, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class CartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCoupon: true,
            totalPrice: 2.0,
            shippingCost: 0.0
        }
    }

    handleSubmit(event) {
        //handle coupon
        event.preventDefault();
    }

    render() {
        const furnitures = furnitureItems.filter(furniture => furniture.quantity > 0).map(furniture => {
            return (
                <CartItem furniture={furniture} />
            );
        });

        const discountMessage = this.state.hasCoupon ? (
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

        const priceMessage = this.state.hasCoupon ? (
            <Row>
                <Col>
                    <p>Your total is: $<del id="oldPrice">{this.state.totalPrice}</del> <span id="totalPriceCart">{this.state.totalPrice * .3}</span></p>
                </Col>
            </Row>
        ) : (
                <Row>
                    <Col>
                        <p>Your total is: ${this.state.totalPrice}</p>
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
                    <Form onSubmit={this.handleSubmit}>
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

function CartItem({ furniture }) {
    return (
        <Row className="align-items-center pb-5">
            <Col xs={"auto"}>
                <Button className="orangeButton" type="button" data-index={furniture.id}>&times;</Button>
            </Col>
            <Col-4 xl="7">
                <img className="cartImg" src={furniture.image} />
            </Col-4>
            <Col>
                <p>{furniture.name}: ${furniture.price}</p>
            </Col>
            <Col>
                {/* todo: fix being able to put in the number */}
                <Label htmlFor="quantity">Quantity</Label>
                <Input type="number" id="quantity" name="quantity" value={furniture.quantity} min="1"></Input>
            </Col>
        </Row>
    );
}

export default CartComponent;