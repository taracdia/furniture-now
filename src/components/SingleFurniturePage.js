import React, { Component } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Loading } from './LoadingComponent';
import { baseUrl } from "../shared/baseUrl"
import Quantity from "./QuantityComponent";

// import { Fade, Stagger } from 'react-animation-components';

function SingleFurniturePage(props) {
    //todo: no ability to comment if not logged in

    //todo: set up loading for other ones

    if (props.furnIsLoading) {
        return (
            <div className="entirePage">
                <Loading />
            </div>
        );
    } else if (props.furnErrMess) {
        return (
            <h3 className="entirePage">{props.errMess}</h3>
        );
    } else {
        return (
            <Container className={"my-4 py-4"}>
                <Row className={"py-4"}>
                    <FurnitureDescriptionComponent
                        furniture={props.furniture}
                        setFurnitureQuantity={props.setFurnitureQuantity}
                    />
                    <Col xs="12" lg="6">
                        <SubmissionComponent
                        />
                        {props.comments.map(comment => {
                            return (
                                <Comment
                                    comment={comment}
                                    key={comment.id}
                                />
                            );
                        })}

                    </Col>
                </Row>
            </Container>
        );
    }
}

function FurnitureDescriptionComponent(props) {
    const { furniture, setFurnitureQuantity } = props;
    console.log(furniture)
    return (
        <Col>
            <Row >
                <Col>
                    <h1>{furniture.name}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>Average rating: #</h6>
                </Col>
                <Col>
                    <h6># ratings</h6>
                </Col>
            </Row>
            <Row className={"py-4 align-items-center"}>
                <Col xs="8">
                    <img
                        className="max-width"
                        src={baseUrl + furniture.image}
                        alt={furniture.name}
                    />
                </Col>
                <Col xs="4">
                    <Quantity
                        furniture={furniture}
                        setFurnitureQuantity={setFurnitureQuantity}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                <p>
                {furniture.description}
                </p>
                </Col>
            </Row>
        </Col>
    );

}

class SubmissionComponent extends Component {
    render() {

        return (
            <Form className={"mb-4 pb-4"}>
                <FormGroup>
                    <Label for="rating">Rating</Label>
                    <Input type="select" name="select" id="rating">
                        <option>1{String.fromCharCode(9733)}</option>
                        <option>2{String.fromCharCode(9733)}</option>
                        <option>3{String.fromCharCode(9733)}</option>
                        <option>4{String.fromCharCode(9733)}</option>
                        <option>5{String.fromCharCode(9733)}</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="commentArea">Comment</Label>
                    <Input type="textarea" name="text" id="commentArea" />
                </FormGroup>
                <Button className="orangeButton">Submit</Button>
            </Form>
        );
    }
}

function Comment(props) {
    return (
        <Row>
            <Col xs="auto">
                <h4>Author: {props.comment.author}</h4>
            </Col>
            <Col>
                <h4>Rating: {props.comment.rating}</h4>
            </Col>
            <Col xs="12">
                <p>{props.comment.text}</p>
            </Col>
        </Row>
    );

}
export default SingleFurniturePage;