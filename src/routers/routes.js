import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../views/pages/home/App';


function RoutesComponent() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    );
}

export default RoutesComponent;