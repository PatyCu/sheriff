import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TripsPage from '../trips/TripsPage';
import NewExpense from '../expenses/NewExpense';
import NewTrip from '../trips/NewTrip';
import ManageExpenses from '../expenses/ManageExpenses';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={TripsPage} />
            <Route path="/new_expense" component={NewExpense} />
            <Route path="/new_expense/:id" component={NewExpense} />                         
            <Route path="/newtrip" component={NewTrip} />               
            <Route path="/trip_expenses/:id" component={ManageExpenses} />                                         
        </Switch>
    </main>
);

export default Main;