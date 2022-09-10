import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Album from '../../components/Album/Album';
import MiniPlayer from '../../components/MiniPlayer/MiniPlayer';
import SideMenu from '../../components/SideMenu/SideMenu';
import Search from '../../components/Search/Search';

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
    <>
      <div className="main-page">
        <div className="main-page__header">
          <SideMenu />
          <Search
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="main-page__content">
          <div className="main-page__playlist">
            <div className="main-page__playlist-title">My Playlist</div>
            <div className="main-page__playlist-content">
              {db.songs &&
                db.songs.map((song, index) => (
                  <Album
                    className="main-page__playlist-item"
                    songs={db.songs}
                    songIndex={index}
                    onClick={() => navigate('/album')}
                  />
                ))}
            </div>
          </div>
          <div className="main-page__playlist">
            <div className="main-page__playlist-title">My Playlist</div>
            <div className="main-page__playlist-content">
              {db.songs &&
                db.songs.map((song, index) => (
                  <Album
                    className="main-page__playlist-item"
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
    </>
  );
}
