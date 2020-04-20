import React, { Component } from 'react';
import CartComponent from './CartComponent.js';


class CheckoutPage extends Component {
    render() {
        return (
            <div className="container py-5">
                <div className="row row-content d-none" id="emptyCartMessage">
                    <div className="col">
                        <h3>Your cart is empty.</h3>
                    </div>
                </div>
                <div className="row row-content d-none" id="loggedInMessage">
                    <div className="col">
                        <h3>You are logged in!</h3>
                    </div>
                </div>
                <div className="row row-content d-none" id="purchaseThankYou">
                    <div className="col">
                        <h3>Thank you for shopping with FurnitureNow!</h3>
                    </div>
                </div>
                <div className="row row-content" id="mainContent">
                    <div className="col col-12 col-xl-7 order-xl-first order-last pt-xl-1 pt-5">
                        <form data-toggle="validator">
                            <fieldset className="pb-5" id="addressForm">
                                <div className="form-row">
                                    <div className="form-group col col-12 col-sm-6">
                                        <input type="text" className="form-control" placeholder="First name" />
                                    </div>
                                    <div className="form-group col col-12 col-sm-6">
                                        <input type="text" className="form-control" placeholder="Last name" />
                                    </div>
                                    <div className="form-group col-12">
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-12">
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Address" />
                                    </div>
                                    <div className="form-group col-12">
                                        <input type="text" className="form-control" id="inputAddress2"
                                            placeholder="Apartment, studio, or floor (optional)" />
                                    </div>
                                    <div className="form-group col col-12 col-md-4">
                                        <input type="text" className="form-control" id="inputCity" placeholder="City" />
                                    </div>
                                    <div className="form-group col col-12 col-sm-6 col-md-4">
                                        <input type="text" className="form-control" id="inputState" placeholder="State" />
                                    </div>
                                    <div className="form-group col col-12 col-sm-6 col-md-4">
                                        <input type="text" className="form-control" id="inputZip" placeholder="Zipcode" />
                                    </div>
                                </div>
                            </fieldset>
                            <div className="form-row">
                                <div className="form-group col col-12 col-lg-9 order-first">
                                    <input type="text" className="form-control" id="inputCardName" placeholder="Name on Card" />
                                </div>
                                <div className="form-group col col-6 col-lg-3 order-lg-2 order-2">
                                    <input type="text" className="form-control" id="inputSecCode" placeholder="Security Code" />
                                </div>

                                <div className="form-group col col-12 order-lg-3 order-4">
                                    <input type="text" className="form-control" id="inputCardNum" placeholder="Card Number" />
                                </div>
                                <div className="form-group col col-6 order-lg-4 order-3">
                                    <select id="inputCardType" className="form-control">
                                        <option defaultValue>Card Type</option>
                                        <option>Visa</option>
                                        <option>American Express</option>
                                    </select>
                                </div>

                                <div className="form-group col col-12 col-lg-6 order-last">
                                    <select id="inputShipping" className="form-control">
                                        <option defaultValue>Free Shipping +$0.00</option>
                                        <option>Fast Shipping +$2.00</option>
                                        <option>Faster Shipping +$5.00</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">

                                <div className="col-12">
                                    <p id="couponErrorMessage" className="d-none errorMessage">Invalid coupon</p>
                                </div>
                            </div>
                            <div className="form-row" id="button-row">
                                <div className="form-group col col-auto">
                                    <button type="submit" className="btn btn-primary" id="confirmPurchaseButton">Confirm
                                Purchase</button>
                                </div>
                                <div className="col col-auto">
                                    <a className="btn btn-warning" href="index.html" role="button">Cancel</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <CartComponent />
                </div>
            </div>
        );
    }
}

export default CheckoutPage;