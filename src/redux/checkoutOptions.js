import * as ActionTypes from './ActionTypes';

export const CheckoutOptions = (state = {
    couponApplied: false,
    shippingCost: 0.0,
    checkoutFinished: false
}, action) => {
    switch (action.type) {
        case ActionTypes.APPLY_COUPON:
            return {...state, couponApplied: action.payload};
        case ActionTypes.CHANGE_SHIPPING_COST:
            return {...state, shippingCost: action.payload};
            case ActionTypes.FINISH_CHECKOUT:
                return {...state, checkoutFinished: action.payload};
        default:
            return state;
    }
};