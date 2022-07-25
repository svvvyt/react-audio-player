import React from 'react';

import './SongPage.scss';

export default function SongPage() {
  return (
    <div className="song-page">
      <div className="song-page__header">
        <button className="song-page__return-btn"></button>
        <div className="song-page__playing-now">Playing Now</div>
      </div>
      <div className="song-page__main">
        <div className="song-page__song-block">
          <div className="song-page__album-logo">
            <img src="" alt="album logo" />
          </div>
          <div className="song-page__credits">
            <div className="song-page__name"></div>
            <div className="song-page__artist"></div>
          </div>
          <div className="song-page__favorites"></div>
        </div>
      </div>
    </div>
  );
}
