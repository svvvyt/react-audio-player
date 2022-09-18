import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import Player from '../../components/Player/Player';
import Button from '../../components/UI/Button/Button';

import './SongPage.scss';

export default function SongPage() {
  const navigate = useNavigate();

  const [albums, setAlbums] = useState(null);
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

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
  //     if (currentSongIndex + 1 > db.songs.length - 1) {
  //       return 0;
  //     }
  //     return currentSongIndex + 1;
  //   });
  // }, [currentSongIndex]);

  return (
    <div className="song-page">
      <div className="song-page__header">
        <Button onClick={() => navigate('/')}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.19613 12.7894L9.59613 6.38937M3.19613 12.7894L9.59613 19.1894M3.19613 12.7894H23.1961"
              stroke="#EAF0FF"
              strokeWidth="2"
            />
          </svg>
        </Button>
        <div className="song-page__title">%Song-title%</div>
      </div>
      {/* <Player
        songs={albums[0].songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
      /> */}
    </div>
  );
}
