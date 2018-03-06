import React from 'react';
import {PropTypes} from 'prop-types';

const ExpenseDetail = ({expense}) => {
    return (
        <div>
            {JSON.stringify(expense)}
        </div>
    );
};

ExpenseDetail.propTypes = {
    expense: PropTypes.object.isRequired
};

export default ExpenseDetail;