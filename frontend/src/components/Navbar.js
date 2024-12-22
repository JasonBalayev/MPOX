import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Monkeypox Tracker</h1>
            </div>
            <div className="navbar-links">
                <button className="nav-button">Global Stats</button>
                <button className="nav-button">Timeline</button>
                <button className="nav-button">About</button>
            </div>
        </nav>
    );
};

export default Navbar; 