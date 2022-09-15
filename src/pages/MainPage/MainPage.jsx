import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Album from '../../components/Album/Album';
import MiniPlayer from '../../components/MiniPlayer/MiniPlayer';
import Search from '../../components/Search/Search';
import Button from '../../components/UI/Button/Button';

import './MainPage.scss';

import db from '../../db.json';

export default function MainPage() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > db.songs.length - 1) {
        return 0;
      }
      return currentSongIndex + 1;
    });
  }, [currentSongIndex]);

  return (
    <div>
      <div className="main-page">
        <div className="main-page__header">
          <Button onClick={() => navigate('/upload')}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7961 3.18936L19.1961 9.58936M12.7961 3.18936L6.39613 9.58936M12.7961 3.18936L12.7961 23.1894"
                stroke="#EAF0FF"
                strokeWidth="2"
              />
            </svg>
          </Button>
          <Search
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="main-page__content">
          <div className="main-page__playlists">
            <div className="main-page__playlists-title">My Playlists</div>
            <div className="main-page__playlists-content">
              {db.songs &&
                db.songs.map((song, index) => (
                  <Album
                    className="main-page__playlists-item"
                    songs={db.songs}
                    songIndex={index}
                    onClick={() => navigate('/album')}
                  />
                ))}
            </div>
          </div>
          <div className="main-page__playlists">
            <div className="main-page__playlists-title">My Playlists</div>
            <div className="main-page__playlists-content">
              {db.songs &&
                db.songs.map((song, index) => (
                  <Album
                    className="main-page__playlists-item"
                    songs={db.songs}
                    songIndex={index}
                    onClick={() => navigate('/album')}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="main-page__mini-player">
        <MiniPlayer
          songs={db.songs}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          onClick={() => navigate('/song')}
        />
      </div>
    </div>
  );
}
