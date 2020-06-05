import React from "react";
import FurnitureCarousel from "./FurnitureCarousel";
import { Container, Row, Button, Col } from "reactstrap";
import FURNITURE_TYPES from "../shared/furnitureTypes";
import Quantity from "./QuantityComponent";
import { Loading } from './LoadingComponent';
import { baseUrl } from "../shared/baseUrl";
import { Fade, Stagger } from 'react-animation-components';

function ShoppingPage(props) {
    if (props.furnitures.isLoading) {
        return (
            <Container className={"my-4 py-4"}>
                <Row className={"my-4 py-4 justify-content-center"} >
                    <Loading />
                </Row>
            </Container>
        );
    } else if (props.furnitures.errMess) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h4>{props.furnitures.errMess}</h4>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return (
            <Container>
                <Row className="justify-content-center pt-5" >
                    <Col xs={"auto"}>
                        <FurnitureCarousel />
                    </Col>
                </Row>
                {Object.values(FURNITURE_TYPES).map(furnitureType => {
                    return (
                        <React.Fragment
                            key={furnitureType}
                        >
                            <hr />
                            <FurnitureRow
                                type={furnitureType}
                                furnitures={props.furnitures.furnitures.filter(furniture => furniture.type === furnitureType)}
                                setFurnitureQuantity={props.setFurnitureQuantity}
                            />
                        </React.Fragment>
                    );
                })}
            </Container>
        );
    }
}

function FurnitureRow(props) {
    const { type, furnitures, setFurnitureQuantity } = props;
    return (
        <Row className="p-4 justify-content-around">
            <Col className="py-4">
                <h3>{type}</h3>
                <Stagger in>
                    {furnitures.map(furniture => {
                        return (
                            <Fade in key={furniture.id}>
                                <FurnitureCard
                                    furniture={furniture}
                                    setFurnitureQuantity={setFurnitureQuantity}
                                />
                            </Fade>
                        );
                    })}
                </Stagger>
            </Col>
        </Row>
    );

}


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


export default ShoppingPage;