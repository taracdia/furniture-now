import React, { Component } from "react";
import FurnitureCarousel from "./FurnitureCarousel.js";
import { Container, Row, Button, Col } from "reactstrap";
import * as furnitureTypes from "../shared/furnitureTypes";

function ShoppingPage({ furnitureItems, addSingleFurniture, removeSingleFurniture, setMultipleFurnitures, deleteFurnitures }) {
    return (
        <Container>
            <Row className="justify-content-center pt-5" >
                <Col xs={"auto"}>
                    <FurnitureCarousel />
                </Col>
            </Row>
            <FurnitureRow
                type={furnitureTypes.TABLES_CHAIRS}
                furnitureItems={furnitureItems}
                addSingleFurniture={addSingleFurniture}
                removeSingleFurniture={removeSingleFurniture}
                setMultipleFurnitures={setMultipleFurnitures}
                deleteFurnitures={deleteFurnitures}
            />
            <hr />
            <FurnitureRow
                type={furnitureTypes.COUCHES}
                furnitureItems={furnitureItems}
                addSingleFurniture={addSingleFurniture}
                removeSingleFurniture={removeSingleFurniture}
                setMultipleFurnitures={setMultipleFurnitures}
                deleteFurnitures={deleteFurnitures} />
            <hr />
            <FurnitureRow
                type={furnitureTypes.BEDS}
                furnitureItems={furnitureItems}
                addSingleFurniture={addSingleFurniture}
                removeSingleFurniture={removeSingleFurniture}
                setMultipleFurnitures={setMultipleFurnitures}
                deleteFurnitures={deleteFurnitures} />
        </Container>
    );
}

function FurnitureRow({ type, furnitureItems, addSingleFurniture, removeSingleFurniture, setMultipleFurnitures, deleteFurnitures }) {
    const furnitures = furnitureItems.filter(furniture => furniture.type === type).map(furniture => {
        return (
            <FurnitureItem
                furniture={furniture}
                addSingleFurniture={addSingleFurniture}
                removeSingleFurniture={removeSingleFurniture}
                setMultipleFurnitures={setMultipleFurnitures}
                deleteFurnitures={deleteFurnitures}
            />
        );
    })

    return (
        <Row className="p-4 justify-content-around">
            <Col className="py-4">
                <h3>{type}</h3>
                {furnitures}
            </Col>
        </Row>
    );

}

class FurnitureItem extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.addSingleFurniture(this.props.furniture);
    }
    render() {
        const furniture = this.props.furniture;
        return (
            <Col xs={12} xl={5} key={furniture.id} className="py-2">
                <Row className="align-items-center">
                    <Col xs={6}>
                        <img src={furniture.image} alt={furniture.name} />
                    </Col>
                    <Col xs={4}>
                        <p>{furniture.name}: ${furniture.price}</p>
                    </Col>
                    <Col xs={2} className="p-0">
                        <Button className="btn-lg orangeButton" onClick={this.handleSubmit}>+<i className="fa fa-shopping-cart"></i></Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}


export default ShoppingPage;