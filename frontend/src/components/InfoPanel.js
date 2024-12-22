import React from 'react';
import './InfoPanel.css';

const InfoPanel = ({ country, cases, onClose }) => {
    return (
        <div className="info-panel">
            <div className="info-header">
                <h2>{country.ADMIN}</h2>
                <button className="close-button" onClick={onClose}>×</button>
            </div>
            <div className="info-content">
                <div className="stat-box">
                    <h3>Total Cases</h3>
                    <p className="stat-number">{cases?.cases || 'No data'}</p>
                </div>
                <div className="stat-box">
                    <h3>Active Cases</h3>
                    <p className="stat-number">{cases?.active || 'No data'}</p>
                </div>
                <div className="stat-box">
                    <h3>Recovered</h3>
                    <p className="stat-number">{cases?.recovered || 'No data'}</p>
                </div>
                {cases?.regions && (
                    <div className="regions-list">
                        <h3>Cases by Region</h3>
                        <ul>
                            {Object.entries(cases.regions).map(([region, count]) => (
                                <li key={region}>
                                    <span>{region}</span>
                                    <span>{count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InfoPanel; 