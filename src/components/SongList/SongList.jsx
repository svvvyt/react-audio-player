import React from 'react';

import './SongList.scss';

export default function SongList({ items }) {
  return (
    <div className="song-list">
      {items &&
        items.map((song) => (
          <div className="song-item">
            <div className="song-item__info">
              <div className="song-item__id">{song.id}</div>
              <div className="song-item__credits">
                <div className="song-item__title">{song.songTitle}</div>
                <div className="song-item__artist">{song.artist}</div>
              </div>
            </div>
            <div className="song-item__duration">03:12</div>
          </div>
        ))}
    </div>
  );
}
