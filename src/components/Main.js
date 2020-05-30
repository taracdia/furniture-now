import React, { Component } from "react";
import ShoppingPage from "./ShoppingPage"
import CheckoutPage from "./CheckoutPage"
import Footer from "./Footer";
import Header from "./Header";
import DealModal from "./DealModal";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setFurnitureQuantity, fetchFurnitures } from "../redux/ActionCreators";

//todo: redux, sass

const mapStateToProps = state => {
    return {
        furnitureItems: state.furnitureItems,
        isCouponApplied: state.isCouponApplied,
        isLoggedIn: state.isLoggedIn,
    };
};

const mapDispatchToProps = {
    setFurnitureQuantity: (furniture, quantity) => (setFurnitureQuantity(furniture, quantity)),
    fetchFurnitures: () => (fetchFurnitures())
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
                />
                <Switch>
                    <Route path="/home" render={() => 
                        <ShoppingPage
                            furnitureItems={this.props.furnitureItems.furnitureItems}
                            setFurnitureQuantity={this.props.setFurnitureQuantity}
                            isLoading={this.props.furnitureItems.isLoading}
                            errMess={this.props.furnitureItems.errMess}
                        />} 
                    />
                    <Route path="/checkout" render={() => <CheckoutPage
                        furnitureItems={this.props.furnitureItems.furnitureItems}
                        isCouponApplied={this.props.isCouponApplied}
                        isLoggedIn={this.props.isLoggedIn}
                        setFurnitureQuantity={this.props.setFurnitureQuantity}
                        isLoading={this.props.furnitureItems.isLoading}
                        errMess={this.props.furnitureItems.errMess}
                    />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));