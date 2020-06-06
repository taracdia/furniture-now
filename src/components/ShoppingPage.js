import React from "react";
import FurnitureCarousel from "./FurnitureCarousel";
import { Container, Row, Button, Col } from "reactstrap";
import FURNITURE_TYPES from "../shared/furnitureTypes";
import { Loading } from './LoadingComponent';
import { Fade, Stagger } from 'react-animation-components';
import FurnitureCard from "./FurnitureCard";


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

export default ShoppingPage;