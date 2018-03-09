import React from 'react';
import {PropTypes} from 'prop-types';
import '../../styles/expenses.scss';


const ExpenseList = ({expense}) => {
    return (
        <blockquote className="grass">
            <span className="Cgrass">{expense.title}</span> - <strong>{expense.amount}{expense.currency}</strong><br />
            {expense.description}
        </blockquote>        
    );
};

ExpenseList.propTypes = {
    expense: PropTypes.object.isRequired
};

export default ExpenseList;