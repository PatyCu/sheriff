import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import '../../styles/expenses.scss';
import { isNullOrUndefined } from 'util';


class NewExpense extends React.Component {
    constructor(props, context) {
        super(props,context);
    }

    render() {
        const {trip_name} = this.props;
        return (
            <div className="NewExpense">
                <iframe className="embed-responsive-item" title="new_menu" id="typeform-full" src={`https://patycu.typeform.com/to/gHvLHD?trip_name=${trip_name}`}>new expense</iframe>
            </div>
        );
    }    
}

NewExpense.propTypes = {
    trip_name: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    let tripId = ownProps.match.params.id;

    if (tripId.length == 0 || tripId == isNullOrUndefined) {
        tripId = "no_trip_field";
    }

    return {
        trip_name: tripId
    };
}

export default connect(mapStateToProps)(NewExpense);