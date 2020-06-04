import React, { Component } from "react";
import { Row, Button, Col } from "reactstrap";
import Quantity from "./QuantityComponent";
import {baseUrl} from "../shared/baseUrl"


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
        this.props.setFurnitureQuantity(this.props.furniture, +0);
    }

    increase() {
        const value = +this.state.quantity + 1;

        this.setState({
            quantity: value
        });
        this.props.setFurnitureQuantity(this.props.furniture, value);
    }

    decrease() {
        const value = +this.state.quantity - 1;
        if (value > 0) {
            this.setState({
                quantity: value
            });
            this.props.setFurnitureQuantity(this.props.furniture, value);
        }
    }

    handleInputChange(e) {
        const value = +e.target.value;

        this.setState({
            quantity: value
        });
        this.props.setFurnitureQuantity(this.props.furniture, value);
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
                        src={baseUrl + furniture.image}
                        alt={furniture.name}
                        />
                </Col-4>
                <Col>
                    <p>{furniture.name}: ${furniture.price.toFixed(2)}</p>
                </Col>
                <Col>
                    <Quantity
                        furniture={furniture}
                        setFurnitureQuantity={this.props.setFurnitureQuantity}
                    />
                </Col>
            </Row>
        );
    }
}

export default CartItem;