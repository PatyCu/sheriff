import React from 'react';
import '../../styles/header.scss';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
       //<Title>Hello World</Title>   
        <div>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/new_expense" activeClassName="active">New Expense</NavLink></li>
                <li><NavLink to="/Menu_item3" activeClassName="active">Menu 3</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;