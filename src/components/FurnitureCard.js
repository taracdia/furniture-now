import React from "react";
import { Row, Col } from "reactstrap";
import Quantity from "./QuantityComponent";
import { baseUrl } from "../shared/baseUrl";
// import { Fade, Stagger } from 'react-animation-components';
import { NavLink } from "react-router-dom";


function FurnitureCard(props) {
    const { furniture, setFurnitureQuantity } = props;
    return (
        <Col xs={12} xl={5} className="py-2">
            <Row className="align-items-center">
                <Col>
                    <img className="max-width" src={baseUrl + furniture.image} alt={furniture.name} />
                </Col>
                <Col>
                    <NavLink
                    className="furnitureLink"
                        to={"/furnitureType/" + furniture.type + "/" + furniture.name}
                    >
                        {furniture.name}
                    </NavLink>
                </Col>
                <Col>
                    <p>${furniture.price.toFixed(2)}</p>
                </Col>
                <Col className="p-0">
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