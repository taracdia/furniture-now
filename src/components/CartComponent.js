import React, { Component } from 'react';
import furnitureItems from '../shared/furnitureItems.js';

class CartComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    render() {
        const furnitures = furnitureItems.filter (furniture => furniture.quantity > 0).map(furniture => {
            return (
                <CartItem furniture={furniture} />
            );
        })
        return (
            <div className="col col-12 col-xl-5 order-first order-xl-last pb-xl-1 pb-5">
                <h4>Your cart contains:</h4>
                <div className="py-4" id="cartContainer">
                    {furnitures}
                </div>
                <div className="row row-content">
                    <div className="col">
                        <p id="cartShippingCost"></p>
                    </div>
                </div>
                <div className="form-row" id="couponRow">
                    <div className="form-group col col-auto">
                        <input type="text" className="form-control" id="inputCoupon" placeholder="Coupon Code (Optional)" />
                    </div>
                    <div className="form-group col col-auto">
                        <button type="button" className="btn orangeButton" id="couponButton">Add Coupon</button>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col">
                        <p id="discountAppliedMessage" className="d-none">30% Discount Applied!</p>
                    </div>
                </div>
                <hr />

                <div className="row row-content">
                    <div className="col">
                        <p>Your total is: $<del id="oldPrice"></del> <span id="totalPriceCart"></span></p>
                    </div>
                </div>

            </div>
        );
    }
}

function CartItem({furniture}){
    return (
        <div className="row row-content align-items-center pb-5">
            <div className="col col-auto">
            <button className="btn removeItemButton orangeButton" type="button" data-index={furniture.id} >&times;</button>
            </div>
            <div class="col col-4 col-xl-7">
                <img className="cartImg" src={furniture.image} />
            </div>
            <div className="col">
                <p>{furniture.name}: ${furniture.price} </p>
            </div>
            <div className="col">
                {/* fix being able to put in the number */}
                <label for="quantity">Quantity</label>
                <input type="number" id="quantity" name="quantity" value={furniture.quantity} min="1"></input>
            </div>
        </div>
    );
}

export default CartComponent;