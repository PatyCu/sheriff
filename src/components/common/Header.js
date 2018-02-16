import React from 'react';
import '../../styles/header.scss';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        /*
        <div id="header">
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/new_expense" activeClassName="active">New Expense</NavLink></li>
                <li><NavLink to="/Menu_item3" activeClassName="active">Menu 3</NavLink></li>
            </ul>
        </div>
        */
        <div id="header">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">SHERIFF</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li><NavLink exact to="/" activeClassName="active">Trips</NavLink></li>
                    <li><NavLink to="/new_expense" activeClassName="active">New Expense</NavLink></li>
                    <li><NavLink to="/Menu_item3" activeClassName="active">Menu 3</NavLink></li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Header;