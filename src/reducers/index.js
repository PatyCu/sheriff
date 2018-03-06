// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import trips from './tripReducer';
 import expenses from './expensesReducer';

 const rootReducer = combineReducers({
    trips,
    expenses,
    routing: routerReducer
 });

 export default rootReducer;