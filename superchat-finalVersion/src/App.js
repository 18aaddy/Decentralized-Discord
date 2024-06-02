import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ChatRoom from './ChatRoom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
