import * as actionTypes from './actionTypes';

export const setIsMaintenanceShown = isShown => {
    return {
        type: actionTypes.SET_MAINTENANCE_SHOWN,
        isMaintenanceShown: isShown
    };
};