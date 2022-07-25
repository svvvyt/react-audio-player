import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import SongPage from './pages/SongPage/SongPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/song" element={<SongPage />} />
      </Routes>
    </div>
  );
}

export default App;
