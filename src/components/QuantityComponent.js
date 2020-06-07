import React from "react";
import { Button, Input, Col, Row } from "reactstrap";

export default class Quantity extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.state = {
            quantity: this.props.furniture.quantity
        }
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
        if (this.props.furniture.quantity === 0){
            return(<Button className="btn-lg orangeButton" onClick={this.increase}>+<i className="fa fa-shopping-cart"></i></Button>)
        } else {
        return (
            <Row>
                <Col>
                    <Button
                        onClick={this.decrease}
                        className="orangeButton"
                        type="button"
                    >
                        -
                    </Button>
                {/* </Col>
                <Col> */}
                    <Input
                        name="quantity"
                        onChange={this.handleInputChange}
                        value={this.state.quantity}
                        type="number"
                        min={1}
                    />
                {/* </Col>
                <Col> */}
                    <Button
                        onClick={this.increase}
                        className="orangeButton"
                        type="button"
                    >
                        +
                    </Button>
                </Col>
            </Row>
        );
            }
    }
}