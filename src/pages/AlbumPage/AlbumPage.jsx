import React from 'react';

import SongItem from '../../components/SongItem/SongItem';

import './AlbumPage.scss';

import db from '../../db.json';

export default function AlbumPage() {
  return (
    <div className="album-page">
      <div className="album-page__title">%album_name% Page</div>
      <div className="album-page__content">
        {db.songs &&
          db.songs.map((song, index) => (
            <SongItem className="album-page__song-item" song={db.songs[0]} />
          ))}
      </div>
    </div>
  );
}
