import React, { useState } from 'react';
import './CaseList.css';

const CaseList = ({ cases }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('cases');

    const sortedCases = Object.entries(cases)
        .filter(([country]) => 
            country.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => b[1][sortBy] - a[1][sortBy]);

    return (
        <div className="case-list">
            <div className="list-header">
                <h2>Global Cases</h2>
                <input
                    type="text"
                    placeholder="Search countries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                >
                    <option value="cases">Total Cases</option>
                    <option value="active">Active Cases</option>
                    <option value="recovered">Recovered</option>
                </select>
            </div>
            <div className="cases-grid">
                {sortedCases.map(([country, data]) => (
                    <div key={country} className="case-card">
                        <h3>{country}</h3>
                        <div className="case-stats">
                            <div className="stat">
                                <span>Total</span>
                                <span>{data.cases}</span>
                            </div>
                            <div className="stat">
                                <span>Active</span>
                                <span>{data.active}</span>
                            </div>
                            <div className="stat">
                                <span>Recovered</span>
                                <span>{data.recovered}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseList;
