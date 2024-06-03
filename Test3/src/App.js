import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ChatRoom from './ChatRoom';
import ChatRoomGeneral from './Channels';
import OffcanvasNavbar from './components/offCanvasNavbar';
import NewHomePage from './HomePageNew';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewHomePage />} />
        {/* <Route path="/channels" element={<OffcanvasNavbar />} /> */}
        <Route path="/channels" element={<ChatRoom />} />
        {/* <Route path="/channels/#general" element={<ChatRoomGeneral />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
