import React from "react";
import FurnitureCarousel from "./FurnitureCarousel";
import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import FURNITURE_TYPES from "../shared/furnitureTypes";
import { Loading } from './LoadingComponent';
import FurnitureCard from "./FurnitureCard";


function ShoppingPage(props) {
    if (props.furnitures.isLoading) {
        return (
            <div className="entirePage">
                <Loading />
            </div>
        );
    } else if (props.furnitures.errMess) {
        return (
            <h3 className="entirePage">{props.furnitures.errMess}</h3>
        );
    } else {
        return (
            <Container>
                <Row className="justify-content-center pt-5" >
                    <Col sm="12" md="10" lg="8" xl="7">
                        <FurnitureCarousel />
                    </Col>
                </Row>
                {FURNITURE_TYPES.map(furnitureType => {
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
                <NavLink
                className="furnitureLink"
                to={"/furnitureType/" + type}
                >
                    <h3>{type}</h3>
                </NavLink>
                <Row>
                    {furnitures.map(furniture => {
                        return (
                                <FurnitureCard
                                    key={furniture.id}
                                    furniture={furniture}
                                    setFurnitureQuantity={setFurnitureQuantity}
                                    
                                />
                        );
                    })}
                </Row>
            </Col>
        </Row>
    );

}

export default ShoppingPage;