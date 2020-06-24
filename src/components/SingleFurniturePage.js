import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Loading } from './LoadingComponent';
import { baseUrl } from "../shared/baseUrl"
import Quantity from "./QuantityComponent";

// import { Fade, Stagger } from 'react-animation-components';

function SingleFurniturePage(props) {
    //todo: handle comments
    if (props.isLoading) {
        return (
            <div className="entirePage">
                <Loading />
            </div>
        );
    } else if (props.errMess) {
        return (
            <h3 className="entirePage">{props.errMess}</h3>
        );
    } else {
        const { furniture, setFurnitureQuantity } = props;
        return (
            <Container className={"my-4"}>
                <Row className={"my-4 py-4"} >
                    <Col>
                        <h1>{furniture.name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img
                        className="max-width"
                        src={baseUrl + furniture.image}
                        alt={furniture.name} 
                        />
                    </Col>
                    <Col className="col-auto">
                        <Quantity
                            furniture={furniture}
                            setFurnitureQuantity={setFurnitureQuantity}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default SingleFurniturePage;