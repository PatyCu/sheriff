import React from 'react';
import {connect} from 'react-redux';
import * as expenseActions from '../../actions/expenseActions';
import { bindActionCreators } from 'redux';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import ExpenseDetail from './ExpenseDetail';

class ManageExpenses extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.actions.loadExpenses();        
    }

    render() {
        const {expenses} = this.props;
        const {trip_name} = this.props;
        
        return (
            <div className="container">        
                <h1>Manage Expenses!</h1>
                {expenses.map( expense => <ExpenseDetail key={expense.id} expense={expense} />)}
                <p className="btn btn-primary alpha"><NavLink to={`/new_expense/${trip_name}`}>+</NavLink></p>                
            </div>
        );
    }
}

ManageExpenses.propTypes = {
    expenses: PropTypes.array.isRequired,
    trip_name: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    const tripId = ownProps.match.params.id;
    
    return {
        trip_name: tripId,
        expenses: state.expenses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(expenseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (ManageExpenses);