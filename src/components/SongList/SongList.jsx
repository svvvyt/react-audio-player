import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import './SongList.scss';

export default function SongList({ items }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  const audioRef = useRef(null);

  const handleActiveItem = (song) => {
    setActiveItem(song);
    audioRef.current.src = song.mp3File;

    if (isPlaying) {
      setIsPlaying(!isPlaying);
      audioRef.current.play();
    } else {
      setIsPlaying(!isPlaying);
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    console.log(audioRef.current);
  }, [audioRef.current]);

  return (
    <div className="song-list">
      {items &&
        items.map((song) => (
          <div
            className={classNames('song-item', {
              'active-item': activeItem && activeItem.id === song.id,
            })}
            onClick={() => {
              handleActiveItem(song);
              console.log(activeItem);
              // togglePlayPause();
            }}
            key={song.id}
          >
            <audio src={song.mp3File} ref={audioRef} />
            <div className="song-item__info">
              <div className="song-item__id">{song.id}</div>
              <div className="song-item__credits">
                <div className="song-item__title">{song.songTitle}</div>
                <div className="song-item__artist">{song.artist}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
