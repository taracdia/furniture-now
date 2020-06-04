import React, { Component } from "react";
import ShoppingPage from "./ShoppingPage"
import CheckoutPage from "./CheckoutPage"
import Footer from "./Footer";
import Header from "./Header";
import DealModal from "./DealModal";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setFurnitureQuantity, fetchFurnitures, applyCoupon, logIn, changeShippingCost, finishCheckout } from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//todo: redux, sass

const mapStateToProps = state => {
    return {
        furnitureItems: state.furnitureItems,
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

class Main extends Component {
    componentDidMount() {
        this.props.fetchFurnitures();
    }

    render() {
        // setTimeout(this.handleModalOn, 10000);
        return (
            // <div onMouseLeave={this.handleModalOn}>
            <div>
                <DealModal />
                <Header
                    furnitureItems={this.props.furnitureItems}
                    logIn={this.props.logIn}
                    loggedIn={this.props.loggedIn}
                />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" render={() =>
                                <ShoppingPage
                                    furnitureItems={this.props.furnitureItems}
                                    setFurnitureQuantity={this.props.setFurnitureQuantity}
                                />}
                            />
                            <Route path="/checkout" render={() => 
                                <CheckoutPage
                                    furnitureItems={this.props.furnitureItems}
                                    setFurnitureQuantity={this.props.setFurnitureQuantity}
                                    loggedIn={this.props.loggedIn}
                                    checkoutOptions={this.props.checkoutOptions}
                                    applyCoupon={this.props.applyCoupon}
                                    changeShippingCost={this.props.changeShippingCost}
                                    finishCheckout={this.props.finishCheckout}
                                />} 
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