import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TripsPage from '../trips/TripsPage';
import NewExpense from '../expenses/NewExpense';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={TripsPage} />
            <Route path="/new_expense" component={NewExpense} />
        </Switch>
    </main>
);

export default Main;