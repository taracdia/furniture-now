import React, { Component } from "react";
import ShoppingPage from "./ShoppingPage"
import CheckoutPage from "./CheckoutPage"
import Footer from "./Footer";
import Header from "./Header";
import DealModal from "./DealModal";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addSingleFurniture, removeSingleFurniture, setMultipleFurnitures, deleteFurnitures } from "../redux/ActionCreators";

//todo: redux, sass

const mapStateToProps = state => {
    return {
        furnitureItems: state.furnitureItems,
        isCouponApplied: state.isCouponApplied,
        isLoggedIn: state.isLoggedIn,
        isThankDisplayed: state.isThankDisplayed,
        totalPrice: state.totalPrice,
        shippingPrice: state.shippingPrice,
        oldPrice: state.oldPrice,

    };
};

const mapDispatchToProps = {
    addSingleFurniture: (furniture) => (addSingleFurniture(furniture)),
    removeSingleFurniture: (furniture) => (removeSingleFurniture(furniture)),
    setMultipleFurnitures: (furniture, quantity) => (setMultipleFurnitures(furniture, quantity)),
    deleteFurnitures: (furniture) => (deleteFurnitures(furniture))
};

class Main extends Component {


    render() {
        // setTimeout(this.handleModalOn, 10000);

        return (
            // <div onMouseLeave={this.handleModalOn}>
            <div>
                <DealModal />
                <Header 
                    furnitureItems={this.props.furnitureItems}
                />
                <Switch>
                    <Route path="/home" render={() => <ShoppingPage
                        furnitureItems={this.props.furnitureItems}
                        addSingleFurniture={this.props.addSingleFurniture}
                        removeSingleFurniture={this.props.removeSingleFurniture}
                        setMultipleFurnitures={this.props.setMultipleFurnitures}
                        deleteFurnitures={this.props.deleteFurnitures}
                    />} />
                    <Route path="/checkout" render={() => <CheckoutPage
                        furnitureItems={this.props.furnitureItems}
                        isCouponApplied={this.props.isCouponApplied}
                        isLoggedIn={this.props.isLoggedIn}
                        isThankDisplayed={this.props.isThankDisplayed}
                        totalPrice={this.props.totalPrice}
                        oldPrice={this.props.oldPrice}
                        addSingleFurniture={this.props.addSingleFurniture}
                        removeSingleFurniture={this.props.removeSingleFurniture}
                        setMultipleFurnitures={this.props.setMultipleFurnitures}
                        deleteFurnitures={this.props.deleteFurnitures}
                    />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));