import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import AlbumList from '../../components/AlbumList/AlbumList';
// import MiniPlayer from '../../components/MiniPlayer/MiniPlayer';
import Search from '../../components/Search/Search';
import Button from '../../components/UI/Button/Button';

import './MainPage.scss';

export default function MainPage() {
  const [albums, setAlbums] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const fetchAlbums = () => {
    axios
      .get('http://localhost:3001/albums')
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  // useEffect(() => {
  //   setNextSongIndex(() => {
  //     if (currentSongIndex + 1 > albums[0].songs.length - 1) {
  //       return 0;
  //     }
  //     return currentSongIndex + 1;
  //   });
  // }, [currentSongIndex]);

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
            <div className="main-page__playlists-title">My Albums</div>
            <div className="main-page__playlists-content">
              {albums && <AlbumList items={albums} />}
            </div>
          </div>
          <div className="main-page__playlists">
            <div className="main-page__playlists-title">My Playlists</div>
            <div className="main-page__playlists-content">
              {albums && <AlbumList items={albums} />}
            </div>
          </div>
        </div>
      </div>
      <div className="main-page__mini-player">
        {/* <MiniPlayer
          songs={albums}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          onClick={() => navigate('/song')}
        /> */}
      </div>
    </div>
  );
}
