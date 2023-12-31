import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VehicleList from './components/VehicleList';
import VehicleDetail from './components/VehicleDetail';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/vehicles/:vehicleId" element={<VehicleDetail />} />
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
