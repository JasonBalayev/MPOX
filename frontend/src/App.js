import React from 'react';
import CaseList from './components/CaseList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Monkeypox Tracker</h1>
            </header>
            <main>
                <CaseList />
            </main>
        </div>
    );
}

export default App;
