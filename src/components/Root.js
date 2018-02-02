import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import PropType from 'prop-types';
import App from './App';

export default class Root extends Component {
    render() {
        const {store, history} = this.props;
        return (
            <Provider store = {store} >
                <ConnectedRouter history = {history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropType.object.isRequired,
    history: PropType.object.isRequired
};