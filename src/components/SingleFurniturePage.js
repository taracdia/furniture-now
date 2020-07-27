import React, { Component } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Loading } from './LoadingComponent';
import { baseUrl } from "../shared/baseUrl"
import Quantity from "./QuantityComponent";

function SingleFurniturePage(props) {
    if (props.furnIsLoading || !props.comments || props.comments.IsLoading) {
        return (
            <div className="entirePage">
                <Loading />
            </div>
        );
    } else if (props.furnErrMess) {
        return (
            <h3 className="entirePage">{props.furnErrMess}</h3>
        );
    }
    else if (props.commentsErrMess) {
        return (
            <h3 className="entirePage">{props.commentsErrMess}</h3>
        );
    } else {
        //Filtering out the comments for other furniture
        const filteredComments = props.comments.comments.filter(c => c.furnitureId === props.furniture.id);

        return (
            <Container className={"my-4 py-4"}>
                <Row className={"py-4"}>
                    <FurnitureDescriptionComponent
                        furniture={props.furniture}
                        setFurnitureQuantity={props.setFurnitureQuantity}
                        comments={filteredComments}
                    />
                    <Col xs="12" lg="6">
                        <SubmissionComponent
                            users={props.users}
                        />
                        {filteredComments.map(comment => {
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
    console.log(props)
    const { furniture, setFurnitureQuantity, comments } = props;
    const numberOfRatings = comments.length;
    const combinedRating = comments.reduce((a, c) => a + c.rating, 0);
    const avRating = combinedRating > 0 ? (combinedRating / numberOfRatings).toFixed(1) : "N/A";
    return (
        <Col>
            <Row >
                <Col>
                    <h1>{furniture.name}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>Average rating: {avRating}</h6>
                </Col>
                <Col>
                    <h6>{numberOfRatings} ratings</h6>
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
        //Users can only submit a comment if they are logged in
        if (this.props.users.isLoggedIn) {
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
        } else {
            return "";
        }
    }
}

function Comment(props) {
    return (
        <div className="py-3">
            <Row>
                <Col xs="4">
                    <p class="font-weight-bold">Author: {props.comment.author}</p>
                </Col>
                <Col>
                    <p>Rating: {props.comment.rating}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{props.comment.text}</p>
                </Col>
            </Row>
        </div>
    );

}
export default SingleFurniturePage;