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
import { setFurnitureQuantity, fetchFurnitures, applyCoupon, logIn, changeShippingCost, finishCheckout } from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FURNITURE_TYPES from "../shared/furnitureTypes"

//todo: sass, improve animations n layout
// todo: set up registration

const mapStateToProps = state => {
    return {
        furnitures: state.furnitures,
        checkoutOptions: state.checkoutOptions,
        loggedIn: state.loggedIn,
    };
};

const mapDispatchToProps = {
    setFurnitureQuantity: (furniture, quantity) => (setFurnitureQuantity(furniture, quantity)),
    fetchFurnitures: () => (fetchFurnitures()),
    logIn: email => logIn(email),
    applyCoupon: () => (applyCoupon()),
    changeShippingCost: cost => changeShippingCost(cost),
    finishCheckout: () => finishCheckout()
};

class Main extends React.Component {
    componentDidMount() {
        this.props.fetchFurnitures();
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
                        errMess={`There is no furniture called "${name}"`}
                    />
                );
            } else if (!FURNITURE_TYPES.includes(type)) {
                return (
                    <SingleFurniturePage
                        errMess={`There is no furniture of type "${type}"`}
                    />
                );
            } else if (furniture.type !== type) {
                return (
                    <SingleFurniturePage
                        errMess={`There is no furniture called "${name}" in "${type}"`}
                    />
                );
            } else {
                return (
                    <SingleFurniturePage
                        furniture={furniture}
                        isLoading={this.props.furnitures.isLoading}
                        errMess={this.props.furnitures.errMess}
                        setFurnitureQuantity={this.props.setFurnitureQuantity}
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
                    loggedIn={this.props.loggedIn}
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
                                <RegisterUserPage/>}
                            />
                            <Route exact path="/checkout" render={() =>
                                <CheckoutPage
                                    furnitures={this.props.furnitures}
                                    setFurnitureQuantity={this.props.setFurnitureQuantity}
                                    loggedIn={this.props.loggedIn}
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