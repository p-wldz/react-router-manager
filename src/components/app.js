import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Menu from './Menu';
import Routes from '../routes/routes';

export default class App extends Component {

    render() {
        return (
            <div>

                <h1>Training with React-Router</h1>
                <Router>
                    <div className="container">
                        <Menu />

                        {Object.keys(Routes).map((route) => (
                            <Route key={route} {...Routes[route]} />
                        ))}
                    </div>
                </Router>
            </div>
        );
    }
}
