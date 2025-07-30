import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RewardPage from './pages/RewardPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/rewards">Rewards</Link>
      </nav>
      <Routes>
        <Route path="/rewards" element={<RewardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
