import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import './SongList.scss';

export default function SongList({ items }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
      console.log(isPlaying);
      audioRef.current.play();
    } else {
      setIsPlaying(!isPlaying);
      console.log(isPlaying);
      audioRef.current.pause();
    }
  };

  return (
    <div className="song-list">
      {items &&
        items.map((song) => (
          <div
            className={classNames('song-item', {
              'active-item': activeItem && activeItem.id === song.id,
            })}
            onClick={() => {
              setActiveItem(song);
              console.log(activeItem);
              togglePlayPause(activeItem);
            }}
            key={song.id}
          >
            {activeItem && <audio src={activeItem.mp3File} ref={audioRef} />}
            <div className="song-item__info">
              <div className="song-item__id">{song.id}</div>
              <div className="song-item__credits">
                <div className="song-item__title">{song.songTitle}</div>
                <div className="song-item__artist">{song.artist}</div>
              </div>
            </div>
            {/* <div className="song-item__duration">03:12</div> */}
          </div>
        ))}
    </div>
  );
}
