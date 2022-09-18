import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Button from '../../components/UI/Button/Button';
import SongList from '../../components/SongList/SongList';

import './AlbumPage.scss';

export default function AlbumPage() {
  const [album, setAlbum] = useState(null);

  const navigate = useNavigate();
  const { artist, albumTitle } = useParams();

  const fetchAlbum = () => {
    axios
      .get(
        `http://localhost:3001/albums?artist=${artist}&albumTitle=${albumTitle}`
      )
      .then((res) => setAlbum(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <div className="album-page">
      <div className="album-page__header">
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
        <div className="album-page__title">Album Page</div>
      </div>
      {album && (
        <div className="album-page__content">
          <div className="album-page__album-info">
            <div className="album-page__album-logo">
              <img src={album[0].albumImg} alt="album-logo" />
            </div>
            <div className="album-page__album-credits">
              <div className="album-page__album-title">
                {album[0].albumTitle}
              </div>
              <div className="album-page__album-artist">{album[0].artist}</div>
              <div className="album-page__album-genre">
                Genre: {album[0].genre}
              </div>
              <div className="album-page__album-release-date">
                Release date: {album[0].releaseDate}
              </div>
            </div>
          </div>
          <div className="album-page__album-songs">
            {<SongList items={album[0].songs} />}
          </div>
        </div>
      )}
    </div>
  );
}
