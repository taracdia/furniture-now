import React from "react";
import ShoppingPage from "./ShoppingPage"
import CheckoutPage from "./CheckoutPage"
import FurnitureGroupPage from "./FurnitureGroupPage"
import SingleFurniturePage from "./SingleFurniturePage"
import RegisterUserPage from "./RegisterUserPage"
import Footer from "./Footer";
import Header from "./Header";
import DealModal from "./DealModal";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setFurnitureQuantity, fetchFurnitures, fetchComments, applyCoupon, logIn, changeShippingCost, finishCheckout, createUser } from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FURNITURE_TYPES from "../shared/furnitureTypes"


const mapStateToProps = state => {
    return {
        furnitures: state.furnitures,
        checkoutOptions: state.checkoutOptions,
        users: state.users,
        comments: state.comments
    };
};

const mapDispatchToProps = {
    setFurnitureQuantity: (furniture, quantity) => (setFurnitureQuantity(furniture, quantity)),
    fetchFurnitures: () => (fetchFurnitures()),
    fetchComments: () => (fetchComments()),
    logIn: (email, password) => logIn(email, password),
    applyCoupon: () => (applyCoupon()),
    changeShippingCost: cost => changeShippingCost(cost),
    finishCheckout: () => finishCheckout(),
    createUser: user => createUser(user)
};

class Main extends React.Component {
    componentDidMount() {
        this.props.fetchFurnitures();
        this.props.fetchComments();
    }
    render() {
        const FurnitureGroupType = ({ match }) => {
            const param = match.params.type;
            if (FURNITURE_TYPES.includes(param)) {
                return (
                    <FurnitureGroupPage
                        furnitures={this.props.furnitures.furnitures.filter(furniture => furniture.type === param)}
                        isLoading={this.props.furnitures.isLoading}
                        errMess={this.props.furnitures.errMess}
                        setFurnitureQuantity={this.props.setFurnitureQuantity}
                        type={param}
                    />
                );
            } else {
                return (
                    <FurnitureGroupPage
                        errMess={`There is no furniture of type "${param}"`}
                    />
                )
            }

        }

        const SingleFurniture = ({ match }) => {
            const { type } = match.params;
            const name = match.params.furniture;


            const furniture = this.props.furnitures.furnitures.filter(f => f.name === name)[0];

             if (!furniture) {
                return (
                    <SingleFurniturePage
                    furnErrMess={`There is no furniture called "${name}"`}
                    />
                );
            } else if (!FURNITURE_TYPES.includes(type)) {
                return (
                    <SingleFurniturePage
                    furnErrMess={`There is no furniture of type "${type}"`}
                    />
                );
            } else if (furniture.type !== type) {
                return (
                    <SingleFurniturePage
                    furnErrMess={`There is no furniture called "${name}" in "${type}"`}
                    />
                );
            } else {
                return (
                    <SingleFurniturePage
                        furniture={furniture}
                        comments={this.props.comments}
                        furnIsLoading={this.props.furnitures.isLoading}
                        furnErrMess={this.props.furnitures.errMess}
                        setFurnitureQuantity={this.props.setFurnitureQuantity}
                        users={this.props.users}
                    />
                );
            }

        }

        // setTimeout(this.handleModalOn, 10000);

        return (
            // <div onMouseLeave={this.handleModalOn}>
            <div>
                <DealModal />
                <Header
                    furnitures={this.props.furnitures}
                    logIn={this.props.logIn}
                    users={this.props.users}
                />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route exact path="/home" render={() =>
                                <ShoppingPage
                                    furnitures={this.props.furnitures}
                                    setFurnitureQuantity={this.props.setFurnitureQuantity}
                                />}
                            />
                            <Route exact path="/register" render={() =>
                                <RegisterUserPage
                                    createUser={this.props.createUser}
                                />}
                            />
                            <Route exact path="/checkout" render={() =>
                                <CheckoutPage
                                    furnitures={this.props.furnitures}
                                    setFurnitureQuantity={this.props.setFurnitureQuantity}
                                    checkoutOptions={this.props.checkoutOptions}
                                    applyCoupon={this.props.applyCoupon}
                                    changeShippingCost={this.props.changeShippingCost}
                                    finishCheckout={this.props.finishCheckout}
                                />}
                            />
                            <Route path='/furnitureType/:type/:furniture'
                                component={SingleFurniture}
                            />
                            <Route path='/furnitureType/:type'
                                component={FurnitureGroupType}
                            />

                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));