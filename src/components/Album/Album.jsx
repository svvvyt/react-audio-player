import React from 'react';

import './Album.scss';

export default function Album({ songs, songIndex, onClick }) {
  return (
    <div onClick={onClick} className="album">
      <div className="album__logo">
        <img src={songs[songIndex].albumImg} alt="album logo" />
      </div>
      <div className="album__credits">
        <div className="album__name">{songs[songIndex].albumTitle}</div>
        <div className="album__artist">{songs[songIndex].artist}</div>
      </div>
    </div>
  );
}
