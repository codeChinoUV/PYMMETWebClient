import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppRouter} from "./router/AppRouter";
import './styles/index.css';

const routerBaseName = process.env.PUBLIC_URL;

function App() {
    return (
        <Router basename={routerBaseName}>
            <AppRouter/>
        </Router>
    )
}

export default App;
