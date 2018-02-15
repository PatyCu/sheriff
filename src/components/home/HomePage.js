import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


const Title = styled.h1`
    font-size: 1.5em;
    color: LightSlateGray;
    margin-bottom: 30px;
`;

const HomePage = () => {
    return (
        <div className="container">
            <div className="row">
                <Title>Choose a trip to start adding expenses!</Title>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card" style={{width: 18 + 'em'}}>
                        <img className="card-img-top" src="../../images/indonesia.jpg" alt="Indonesia trip" />
                        <div className="card-body">
                            <h5 className="card-title">Trip to Indonesia</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="btn btn-primary alpha"><NavLink to="/new_expense">Go somewhere</NavLink></p>
                        </div>
                    </div>
                    <p>&nbsp;</p>                    
                </div>
                <div className="col">
                    <div className="card" style={{width: 18 + 'em'}}>
                        <img className="card-img-top" src="../../images/donostia.jpg" alt="Donostia trip" />
                        <div className="card-body">
                            <h5 className="card-title">Trip to Donostia</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="btn btn-primary alpha">Go somewhere</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>                                        
                </div>
                <div className="col">
                    <div className="card" style={{width: 18 + 'em'}}>
                        <img className="card-img-top" src="../../images/pirineus.jpg" alt="Pirineus trip" />
                        <div className="card-body">
                            <h5 className="card-title">Trip to Pirineus</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="btn btn-primary alpha">Go somewhere</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>                                        
                </div>
                <div className="col">
                    <div className="card" style={{width: 18 + 'em'}}>
                        <img className="card-img-top" src="../../images/laos.jpg" alt="Laos trip" />
                        <div className="card-body">
                            <h5 className="card-title">Trip to Laos</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="btn btn-primary alpha">Go somewhere</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>                                        
                </div>
                <div className="col">
                    <div className="card" style={{width: 18 + 'em'}}>
                        <img className="card-img-top" src="../../images/oporto.jpg" alt="Oporto trip" />
                        <div className="card-body">
                            <h5 className="card-title">Trip to Oporto</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="btn btn-primary alpha">Go somewhere</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>                                        
                </div>
                <div className="col">
                    <div className="card" style={{width: 18 + 'em'}}>
                        <img className="card-img-top" src="../../images/priorat.jpg" alt="Priorat trip" />
                        <div className="card-body">
                            <h5 className="card-title">Trip to Priorat</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="btn btn-primary alpha">Go somewhere</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>                                        
                </div>
            </div>
        </div>
    );
};

export default HomePage;