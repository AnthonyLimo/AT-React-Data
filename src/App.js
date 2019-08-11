import React from 'react';
import './App.css';
import Navigation from './components/navigation'
import SingleDataPurchase from './components/SingleDataPurchase'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <SingleDataPurchase/>
    </div>
  );
}

export default App;
