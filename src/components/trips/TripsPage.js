import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as tripActions from '../../actions/tripActions';
import TripCard from './TripCard';


const Title = styled.h1`
    font-size: 1.5em;
    color: LightSlateGray;
    margin-bottom: 30px;
`;

class TripsPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {trips} = this.props;
    
        return (
            <div className="container">
                <div className="row">
                    <Title>Choose a trip to start adding expenses!</Title>
                </div>
                <div className="row">
                    {<TripCard trip={{id:"no_trip_field", name:"Add a new trip", description:"", coverPhoto: "sheriff_badge.png"}} />}            
                    {trips.map( trip => <TripCard key={trip.id} trip={trip} />)}
                </div>
            </div>
        );
    }
}

TripsPage.propTypes = {
    trips: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        trips: state.trips
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(tripActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (TripsPage);