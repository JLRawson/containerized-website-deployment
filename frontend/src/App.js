import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>User List Website</h1>
            </header>
            <main>
                <Dashboard />
            </main>
        </div>
    );
}

export default App;
