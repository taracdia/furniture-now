import React, { Component } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Loading } from './LoadingComponent';
import { baseUrl } from "../shared/baseUrl"
import Quantity from "./QuantityComponent";

// import { Fade, Stagger } from 'react-animation-components';

function SingleFurniturePage(props) {
    //todo: handle comments
    //todo: no ability to comment if not logged in
    //todo: remove dummy variable
    const comment = {};
    comment.author = "Bob";
    comment.date = new Date();
    comment.text = "good";
    comment.rating = 4;

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
                <Row className={"mt-4 pt-4"} >
                    <Col>
                        <h1>{furniture.name}</h1>
                    </Col>
                </Row>
                <Row className={"mb-4"} >
                    <Col>
                        <h6>Average rating: #</h6>
                    </Col>
                    <Col>
                        <h6># ratings</h6>
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
                <Row>
                    <Col>
                        <SubmissionComponent />
                    </Col>
                </Row>
            </Container>
        );
    }
}

class SubmissionComponent extends Component {
    render() {
        
        return (
            <Form>
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

class Comment extends Component {
    render() {
        
        return (
            <Col>
            </Col>
        );
    }
}
export default SingleFurniturePage;