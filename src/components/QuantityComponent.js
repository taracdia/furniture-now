import React, {Component} from "react";
import { Button, Label, Input, Col } from "reactstrap";

export default class Quantity extends Component {
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
        return (
                <Col>
                    <Button
                        onClick={this.decrease}
                        className="orangeButton"
                        type="button"
                    >
                        -
                    </Button>
                    <Input
                        name="quantity"
                        onChange={this.handleInputChange}
                        value={this.state.quantity}
                        type="number"
                        min={1}
                    />
                    <Button
                        onClick={this.increase}
                        className="orangeButton"
                        type="button"
                    >
                        +
                    </Button>
                </Col>
        );
    }
}