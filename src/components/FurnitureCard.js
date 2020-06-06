import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Quantity from "./QuantityComponent";
import { Loading } from './LoadingComponent';
import { baseUrl } from "../shared/baseUrl";
import { Fade, Stagger } from 'react-animation-components';

class FurnitureCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.setFurnitureQuantity(this.props.furniture, 1);
    }
    render() {
        const furniture = this.props.furniture;
        const addToCart = furniture.quantity === 0
            ? <Button className="btn-lg orangeButton" onClick={this.handleSubmit}>+<i className="fa fa-shopping-cart"></i></Button>
            : <Quantity
                furniture={furniture}
                setFurnitureQuantity={this.props.setFurnitureQuantity}
            />


        return (
            <Col xs={12} xl={5} className="py-2">
                <Row className="align-items-center">
                    <Col xs={6}>
                        <img src={baseUrl + furniture.image} alt={furniture.name} />
                    </Col>
                    <Col xs={4}>
                        <p>{furniture.name}: ${furniture.price}</p>
                    </Col>
                    <Col xs={2} className="p-0">
                        {addToCart}
                    </Col>
                </Row>
            </Col>
        );
    }
}



export default FurnitureCard;