import React from "react";
import { Container, Row, Col } from "reactstrap";
import FurnitureCard from "./FurnitureCard";
import { Loading } from './LoadingComponent';
// import { Fade, Stagger } from 'react-animation-components';

function FurnitureGroupPage(props) {
    if (props.isLoading) {
        return (
            <Container className={"my-4 py-4"}>
                <Row className={"my-4 py-4 justify-content-center"} >
                    <Loading />
                </Row>
            </Container>
        );
    } else if (props.errMess) {
        return (
            <Container className={"my-4 py-4"}>
                <Row className={"my-4 py-4 justify-content-center"} >
                    <Col>
                        <h4>{props.furnitures.errMess}</h4>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        console.log(props)
        return (
                <Container className={"my-4 py-4"}>
                <Row className={"my-4 py-4"} >
                    <Col>
                        <h1>{props.type}</h1>
                    </Col>
                </Row>
                <Row>
                {props.furnitures.map(furniture => {
                    return (
                            <FurnitureCard
                                furniture={furniture}
                                setFurnitureQuantity={props.setFurnitureQuantity}
                                key={furniture.id}
                            />
                    );
                })}
                </Row>
            </Container>
        );
    }
}

export default FurnitureGroupPage;