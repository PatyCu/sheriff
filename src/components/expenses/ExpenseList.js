import React from 'react';
import {PropTypes} from 'prop-types';
import '../../styles/expenses.scss';


const ExpenseList = ({expense}) => {
    return (
        <blockquote className="expenselist">
            <div className="row">
                <div className="col-3">
                    <div className="expensedescription">
                    <span className="expensetitle">{expense.title}</span><br />
                    {expense.description}
                    </div>
                </div>
                <div className="col-1">
                    <span className="expenseamount">{expense.amount}{expense.currency}</span>
                </div>
                <div className="col">
                    <img className="expensedetail" src="../../images/eye_icon.png" alt="View Expense details" />
                </div>
            </div>            
        </blockquote>        
    );
};

ExpenseList.propTypes = {
    expense: PropTypes.object.isRequired
};

export default ExpenseList;