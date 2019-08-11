import React from 'react';
import './App.css';
import Navigation from './components/navigation'
import DataPurchase from './components/DataPurchase'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <DataPurchase/>
    </div>
  );
}

export default App;
