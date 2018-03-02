import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

//TO-DO: connectar-ho a redux i afegir les expenses del trip al state

const TripCard = ({trip}) => {
    return (
        <div className="col">
            <div className="card" style={{width: 18 + 'em'}}>
                <img className="card-img-top" src={`../../images/${trip.coverPhoto}`} alt={trip.name} />
                <div className="card-body">
                    <h5 className="card-title">{trip.name}</h5>
                    <p className="card-text">{trip.description}</p>
                    <p className="btn btn-primary alpha"><NavLink to={`/new_expense/${trip.id}`}>Go somewhere</NavLink></p>
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