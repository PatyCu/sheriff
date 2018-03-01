import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import expenseApi from '../api/mockExpensesApi';

export function loadExpensesSuccess(expenses) {
    return { type: types.LOAD_EXPENSES_SUCCESS, expenses};
}

export function loadExpenses() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return expenseApi.getAllExpenses().then ( expenses => {
            dispatch(loadExpensesSuccess(expenses));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw (error);
        });
    };
}