import React from 'react';
import {connect} from 'react-redux';
import * as expenseActions from '../../actions/expenseActions';
import { bindActionCreators } from 'redux';


class ManageExpenses extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        //const {expenses} = this.props;
        
        return (
            <div className="container">        
                <h1>Manage Expenses!</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    
    return {
        expenses: state.expenses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(expenseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (ManageExpenses);