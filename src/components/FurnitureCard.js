import React from "react";
import { Row, Col } from "reactstrap";
import Quantity from "./QuantityComponent";
import { baseUrl } from "../shared/baseUrl";
// import { Fade, Stagger } from 'react-animation-components';

function FurnitureCard(props) {
    const { furniture, setFurnitureQuantity } = props;
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
                    <Quantity
                        furniture={furniture}
                        setFurnitureQuantity={setFurnitureQuantity}
                    />
                </Col>
            </Row>
        </Col>
    );

}



export default FurnitureCard;