import React from "react";
import { Container, Row, Button, Col } from "reactstrap";
import FURNITURE_TYPES from "../shared/furnitureTypes";
import Quantity from "./QuantityComponent";
import { Loading } from './LoadingComponent';
import { baseUrl } from "../shared/baseUrl";
import { Fade, Stagger } from 'react-animation-components';

function FurnitureGroupPage(props) {
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
                {/* <Row className="justify-content-center pt-5" >
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
                })} */}
            </Container>
        );
    }
}

export default FurnitureGroupPage;