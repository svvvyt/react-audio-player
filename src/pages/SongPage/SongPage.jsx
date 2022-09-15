import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Player from '../../components/Player/Player';
import Button from '../../components/UI/Button/Button';

import './SongPage.scss';

import db from '../../db.json';

export default function SongPage() {
  const navigate = useNavigate();

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > db.songs.length - 1) {
        return 0;
      }
      return currentSongIndex + 1;
    });
  }, [currentSongIndex]);

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
      </div>
      <div className="song-page__main">
        <Player
          songs={db.songs}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
        />
      </div>
    </div>
  );
}
