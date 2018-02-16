import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const TripCard = ({trip}) => {
    return (
        <div className="col">
            <div className="card" style={{width: 18 + 'em'}}>
                <img className="card-img-top" src={`../../images/${trip.coverPhoto}`} alt={trip.name} />
                <div className="card-body">
                    <h5 className="card-title">Trip to {trip.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="btn btn-primary alpha"><NavLink to="/new_expense">Go somewhere</NavLink></p>
                </div>
            </div>
            <p>&nbsp;</p>                    
        </div>
    );
};

TripCard.propTypes = {
    trip: PropTypes.object.isRequired
};

export default TripCard;