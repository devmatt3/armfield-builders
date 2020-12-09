import * as actionTypes from '../actions/actionTypes';

const intialState = {
    isMaintenanceShown: false
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MAINTENANCE_SHOWN:
            return { ...state, isMaintenanceShown: action.isMaintenanceShown };
        default:
            return state;
    }
}

export default reducer;