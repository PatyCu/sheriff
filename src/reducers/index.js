// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import trips from './tripReducer';

 const rootReducer = combineReducers({
    trips,
    routing: routerReducer
 });

 export default rootReducer;