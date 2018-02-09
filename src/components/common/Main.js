import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../home/HomePage';
import NewExpense from '../expenses/NewExpense';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/new_expense" component={NewExpense} />
        </Switch>
    </main>
);

export default Main;