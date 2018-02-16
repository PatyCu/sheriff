import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import tripApi from '../api/mockTripApi';

export function loadTripsSucess(trips) {
    return { type: types.LOAD_TRIPS_SUCCESS, trips };
}

export function loadTrips() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return tripApi.getAllTrips().then( trips => {
            dispatch(loadTripsSucess(trips));
        }).catch(error => {
            dispatch(ajaxCallError);
            throw (error);    
        });
    };
}