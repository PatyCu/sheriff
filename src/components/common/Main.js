import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TripsPage from '../trips/TripsPage';
import NewExpense from '../expenses/NewExpense';
import NewTrip from '../trips/NewTrip';
import ManageExpenses from '../expenses/ManageExpenses';
import NewExpenseNoTrip from '../expenses/NewExpenseNoTrip';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={TripsPage} />
            <Route exact path="/new_expense" component={NewExpenseNoTrip} />            
            <Route path="/new_expense/:id" component={NewExpense} />                         
            <Route path="/newtrip" component={NewTrip} />               
            <Route path="/trip_expenses/:id" component={ManageExpenses} />                                         
        </Switch>
    </main>
);

export default Main;