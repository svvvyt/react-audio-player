import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import SongPage from './pages/SongPage/SongPage';
import UploadPage from './pages/UploadPage/UploadPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/album/:artist/:albumTitle" element={<AlbumPage />} />
        <Route path="/song/:artist/:album/:song" element={<SongPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
