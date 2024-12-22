import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import CaseList from './components/CaseList';
import * as d3 from 'd3';

function App() {
    const [countries, setCountries] = useState([]);
    const [cases, setCases] = useState([]);
    
    useEffect(() => {
        // Fetch globe data (geojson) and case data
        fetch('/GeoJSON/countries.geojson') // Replace with the path to your geojson file
            .then(res => res.json())
            .then(setCountries);
        
        fetch('/api/cases') // API endpoint to get live data
            .then(res => res.json())
            .then(setCases);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Monkeypox Tracker</h1>
            </header>
            <main>
                <Globe
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                    polygonsData={countries.features}
                    polygonCapColor={() => 'rgba(200, 0, 0, 0.6)'}
                    polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
                    polygonStrokeColor={() => '#111'}
                    polygonLabel={({ properties: d }) => 
                        `<b>${d.ADMIN} (${d.ISO_A2})</b><br />Cases: ${cases[d.ISO_A2]?.cases ?? 'N/A'}`
                    }
                    onPolygonClick={({ properties: d }) => alert(`Clicked on ${d.ADMIN}`)}
                    polygonsTransitionDuration={300}
                />
                <CaseList />
            </main>
        </div>
    );
}

export default App;
