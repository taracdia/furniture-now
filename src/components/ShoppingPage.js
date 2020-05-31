import React, { Component } from "react";
import FurnitureCarousel from "./FurnitureCarousel.js";
import { Container, Row, Button, Col } from "reactstrap";
import FURNITURE_TYPES from "../shared/furnitureTypes";
import Quantity from "./QuantityComponent";
import { Loading } from './LoadingComponent';
import {baseUrl} from "../shared/baseUrl";
import { Fade, Stagger } from 'react-animation-components';

function ShoppingPage(props) {
    return (
        <Container>
            <Row className="justify-content-center pt-5" >
                <Col xs={"auto"}>
                    <FurnitureCarousel />
                </Col>
            </Row>
            {Object.values(FURNITURE_TYPES).map(furnitureType => {
        return (
            <React.Fragment>
                <hr />
            <FurnitureRow
                type={furnitureType}
                furnitureItems={props.furnitureItems}
                setFurnitureQuantity={props.setFurnitureQuantity}
                isLoading={props.isLoading}
                errMess={props.errMess}
            />
            </React.Fragment>
        );
    })}
        </Container>
    );
}

function FurnitureRow(props) {
    const { type, furnitureItems, setFurnitureQuantity } = props;
        if (props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        } else if (props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        } else {
    

    return (
        <Row className="p-4 justify-content-around">
            <Col className="py-4">
                <h3>{type}</h3>
                <Stagger in>
                {furnitureItems.filter(furniture => furniture.type === type).map(furniture => {
                return (
                    <Fade in key={furniture.id}>
                    <FurnitureItem
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
}


class FurnitureItem extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            switchToQuantity: false
        }
    }

    handleSubmit() {
        const value = +this.props.furniture.quantity + 1;
        this.props.setFurnitureQuantity(this.props.furniture, value);
        this.setState({
            switchToQuantity: true
        })
    }
    render() {
        const furniture = this.props.furniture;
        const adder = this.state.switchToQuantity
            ? <Quantity
                furniture={furniture}
                setFurnitureQuantity={this.props.setFurnitureQuantity}
            />
            : <Button className="btn-lg orangeButton" onClick={this.handleSubmit}>+<i className="fa fa-shopping-cart"></i></Button>;


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
                        {adder}
                    </Col>
                </Row>
            </Col>
        );
    }
}


export default ShoppingPage;