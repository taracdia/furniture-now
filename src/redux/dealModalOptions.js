import * as ActionTypes from './ActionTypes';

export const DealModalOptions = (state = {
    hasDealModalTriggered: false,
    isDealModalOpen: false
}, action) => {

    switch (action.type) {
        case ActionTypes.OPEN_DEAL_MODAL:
            if (!state.hasDealModalTriggered && !state.isDealModalOpen) {
                return { ...state, hasDealModalTriggered: true, isDealModalOpen: true };
            } else {
                return state;
            }
        case ActionTypes.CLOSE_DEAL_MODAL:
            return { ...state, hasDealModalTriggered: true, isDealModalOpen: false };
        default:
            return state;
    }
};