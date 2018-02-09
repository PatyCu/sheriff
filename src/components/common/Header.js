import React from 'react';
import '../../styles/header.scss';
import {NavLink, Switch, Route} from 'react-router-dom';
import HomePage from '../home/HomePage';

const Header = () => {
    return (
       //<Title>Hello World</Title>   
        <div>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/Menu_item2" activeClassName="active">Menu 2</NavLink></li>
                <li><NavLink to="/Menu_item3" activeClassName="active">Menu 3</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>    
        </div>
    );
};

export default Header;