import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import CaseList from './components/CaseList';
import Navbar from './components/Navbar';
import InfoPanel from './components/InfoPanel';
import { getCases } from './api';
import './App.css';

function App() {
    const [countries, setCountries] = useState([]);
    const [cases, setCases] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [globeConfig, setGlobeConfig] = useState({
        pointOfView: { lat: 0, lng: 0, altitude: 2.5 }
    });
    
    useEffect(() => {
        // Fetch globe data (geojson) and case data
        fetch('/GeoJSON/countries.geojson')
            .then(res => res.json())
            .then(setCountries);
        
        // Fetch initial cases data
        fetchCases();

        // Set up polling for live updates
        const interval = setInterval(fetchCases, 300000); // Update every 5 minutes
        return () => clearInterval(interval);
    }, []);

    const fetchCases = async () => {
        try {
            const data = await getCases();
            setCases(data);
        } catch (error) {
            console.error('Error fetching cases:', error);
        }
    };

    const handleCountryClick = (country) => {
        const { lat, lng } = country.properties.CENTER || { lat: 0, lng: 0 };
        setSelectedCountry(country);
        setGlobeConfig({
            pointOfView: {
                lat,
                lng,
                altitude: 1.5
            }
        });
    };

    return (
        <div className="app-container">
            <Navbar />
            <main className="main-content">
                <div className="globe-container">
                    <Globe
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                        polygonsData={countries.features}
                        polygonCapColor={d => cases[d.properties.ISO_A2]?.cases > 0 ? 'rgba(255, 0, 0, 0.3)' : 'rgba(0, 200, 0, 0.1)'}
                        polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
                        polygonStrokeColor={() => '#111'}
                        polygonLabel={({ properties: d }) => `
                            <div class="country-label">
                                <h3>${d.ADMIN}</h3>
                                <p>Cases: ${cases[d.ISO_A2]?.cases || 'No data'}</p>
                            </div>
                        `}
                        onPolygonClick={({ properties }) => handleCountryClick(properties)}
                        polygonsTransitionDuration={300}
                        pointOfView={globeConfig.pointOfView}
                    />
                </div>
                <div className="side-panel">
                    {selectedCountry ? (
                        <InfoPanel 
                            country={selectedCountry} 
                            cases={cases[selectedCountry.ISO_A2]} 
                            onClose={() => setSelectedCountry(null)}
                        />
                    ) : (
                        <CaseList cases={cases} />
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
