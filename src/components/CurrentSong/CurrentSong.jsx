import React from 'react';

import './CurrentSong.scss';

export default function CurrentSong({ songName, artistName }) {
  return (
    <div className="current-song">
      <div className="current-song__progress-bar">
        <input type="range" defaultValue="0" />
      </div>
      <div className="current-song__main">
        <div className="current-song__album-logo">
          <img src="" alt="album-logo" />
        </div>
        <div className="current-song__credits">
          <p className="current-song__name">{songName}</p>
          <p className="current-song__artist">{artistName}</p>
        </div>
        <div className="current-song__control-panel">
          <div className="current-song__prev-button"></div>
          <div className="current-song__play-button"></div>
          <div className="current-song__next-button"></div>
        </div>
      </div>
    </div>
  );
}
