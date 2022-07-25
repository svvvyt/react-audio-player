import React, { useState, useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import Button from '../UI/Button/Button';

import './MiniPlayer.scss';

export default function MiniPlayer({
  songs,
  currentSongIndex,
  setCurrentSongIndex,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const progressBarRef = useRef();

  function changeRange() {
    audioRef.current.currentTime = progressBarRef.current.value;
  }

  function skipSong(forwards = true) {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }
        return temp;
      });
    }
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  });

  return (
    <div className="mini-player">
      <audio src={songs[currentSongIndex].mp3File} ref={audioRef} />
      <div className="current-song__progress-bar">
        <input
          onChange={changeRange}
          ref={progressBarRef}
          type="range"
          defaultValue="0"
        />
      </div>
      <div className="mini-player__container">
        <div className="mini-player__album-logo">
          <img src={songs[currentSongIndex].albumImg} alt="" />
        </div>
        <div className="mini-player__credits">
          <div className="mini-player__name">
            {songs[currentSongIndex].songTitle}
          </div>
          <div className="mini-player__artist">
            {songs[currentSongIndex].artist}
          </div>
        </div>
        <div className="mini-player__controls">
          <Button onClick={() => skipSong(false)}>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4151 14.9779L17.8342 15.7935C18.1395 16.0109 18.5407 16.0396 18.8739 15.8679C19.207 15.6962 19.4164 15.3527 19.4164 14.9779H18.4151ZM18.4151 1.11215H19.4164C19.4164 0.737321 19.207 0.393883 18.8739 0.222135C18.5407 0.0503864 18.1395 0.079092 17.8342 0.296525L18.4151 1.11215ZM8.68008 8.04502L8.09922 7.22939C7.83541 7.41727 7.67876 7.72114 7.67876 8.04502C7.67876 8.36889 7.83541 8.67276 8.09922 8.86064L8.68008 8.04502ZM19.4164 14.9779V1.11215H17.4138V14.9779H19.4164ZM17.8342 0.296525L8.09922 7.22939L9.26093 8.86064L18.9959 1.92777L17.8342 0.296525ZM8.09922 8.86064L17.8342 15.7935L18.9959 14.1623L9.26093 7.22939L8.09922 8.86064ZM2.72783 15.6712V0.41886H0.725197V15.6712H2.72783Z"
                fill="#EAF0FF"
              />
            </svg>
          </Button>
          <Button onClick={() => setIsPlaying(!isPlaying)}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </Button>
          <Button onClick={() => skipSong()}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.12616 3.55887L2.73162 2.71123C2.4141 2.48443 1.99646 2.45411 1.64951 2.63265C1.30256 2.8112 1.08449 3.16868 1.08449 3.55887H2.12616ZM2.12616 17.4478H1.08449C1.08449 17.838 1.30256 18.1955 1.64951 18.374C1.99646 18.5526 2.4141 18.5223 2.73162 18.2955L2.12616 17.4478ZM11.8484 10.5033L12.4539 11.351C12.7276 11.1555 12.8901 10.8398 12.8901 10.5033C12.8901 10.1669 12.7276 9.85124 12.4539 9.6557L11.8484 10.5033ZM1.08449 3.55887V17.4478H3.16783V3.55887H1.08449ZM2.73162 18.2955L12.4539 11.351L11.243 9.6557L1.5207 16.6002L2.73162 18.2955ZM12.4539 9.6557L2.73162 2.71123L1.5207 4.40651L11.243 11.351L12.4539 9.6557ZM17.7512 2.86443V18.1423H19.8346V2.86443H17.7512Z"
                fill="#EAF0FF"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
