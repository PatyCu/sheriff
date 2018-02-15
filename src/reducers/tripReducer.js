import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tripReducer(state = initialState.trips, action) {
    switch (action.type) {
        case types.LOAD_TRIPS_SUCCESS:
            return action.trips;
        default:
            return state;
    }
}