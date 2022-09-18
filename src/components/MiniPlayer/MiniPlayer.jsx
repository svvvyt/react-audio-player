import React, { useState, useEffect, useRef } from 'react';
import Button from '../UI/Button/Button';

import './MiniPlayer.scss';

export default function MiniPlayer({
  albums,
  currentAlbumIndex,
  setCurrentAlbumIndex,
  songs,
  currentSongIndex,
  setCurrentSongIndex,
  onClick,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const seconds = Math.floor(audioRef.current.duration);
    setDuration(seconds);

    progressBarRef.current.max = seconds;
  }, [audioRef?.current?.loadedmetadata, audioRef?.current?.readyState]);

  const skipSong = (forwards = true) => {
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
  };

  const skipAlbum = (forwards = true) => {
    if (forwards) {
      setCurrentAlbumIndex(() => {
        let temp = currentAlbumIndex;
        temp++;

        if (temp > albums.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentAlbumIndex(() => {
        let temp = currentAlbumIndex;
        temp--;

        if (temp < 0) {
          temp = albums.length - 1;
        }

        return temp;
      });
    }
  };

  const handleNext = () => {
    skipSong();
  };

  const changePlayerCurrentTime = () => {
    progressBarRef.current.style.setProperty(
      '--seek-before-width',
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBarRef.current.value);
  };

  const changeRange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    changePlayerCurrentTime();
  };

  const whilePlaying = () => {
    progressBarRef.current.value = audioRef.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  return (
    <div className="mini-player">
      <audio
        src={songs[currentSongIndex].mp3File}
        ref={audioRef}
        onEnded={handleNext}
        autoPlay={isPlaying}
      />
      <div>
        <input
          className="mini-player__progress-bar"
          onChange={changeRange}
          ref={progressBarRef}
          type="range"
          defaultValue="0"
        />
      </div>
      <div className="mini-player__timers">
        <div className="mini-player__current-time">
          {formatTime(currentTime)}
        </div>
        <div className="mini-player__duration">
          {duration && !Number.isNaN(duration) ? formatTime(duration) : '00:00'}
        </div>
      </div>
      <div className="mini-player__container">
        <div className="mini-player__album-logo">
          <img src={albums[currentAlbumIndex].albumImg} alt="album-logo" />
        </div>
        <div className="mini-player__credits">
          <div className="mini-player__name" onClick={onClick}>
            {songs[currentSongIndex].songTitle}
          </div>
          <div className="mini-player__artist">
            {songs[currentSongIndex].artist}
          </div>
        </div>
        <div className="mini-player__controls">
          <div className="mini-player__song-controls">
            <Button mini onClick={() => skipSong(false)}>
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
            <Button mini onClick={togglePlayPause}>
              {isPlaying ? (
                <svg
                  width="39"
                  height="42"
                  viewBox="0 0 36 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2961 9.0692V33.5196M24.2961 9.0692V33.5196"
                    stroke="#EAF0FF"
                    strokeWidth="3"
                  />
                </svg>
              ) : (
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_805_392)">
                    <path
                      d="M7.02214 0.727617C4.047 -0.978964 1.63495 0.419088 1.63495 3.84776V29.1498C1.63495 32.5819 4.047 33.9781 7.02214 32.2732L29.1374 19.5902C32.1135 17.883 32.1135 15.1171 29.1374 13.4104L7.02214 0.727617Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_805_392">
                      <rect width="33" height="33" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </Button>
            <Button mini onClick={() => skipSong(false)}>
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
          <div className="mini-player__album-controls">
            <Button mini onClick={() => skipAlbum(false)}>
              {'<<'}
            </Button>
            <Button mini onClick={() => skipAlbum()}>
              {'>>'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
