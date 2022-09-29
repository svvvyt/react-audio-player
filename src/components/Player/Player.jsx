import React, { useState, useEffect, useRef } from 'react';

import Button from '../UI/Button/Button';

import './Player.scss';

export default function Player({
  songs,
  currentSongIndex,
  setCurrentSongIndex,
  albums,
  currentAlbumIndex,
  setCurrentAlbumIndex,
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
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  return (
    <div className="player">
      <audio
        src={songs[currentSongIndex].mp3File}
        ref={audioRef}
        onEnded={handleNext}
      />
      <div>
        <div className="player__song-info">
          <div className="player__album-logo">
            <img
              className="foreground-img"
              src={albums[currentAlbumIndex].albumImg}
              alt="album-logo"
            />
            <img
              className="background-img"
              src={songs[currentSongIndex].albumImg}
              alt="album-logo"
            />
          </div>
          <div className="player__credits">
            <div className="player__name">
              {songs[currentSongIndex].songTitle}
            </div>
            <div className="player__artist">
              {songs[currentSongIndex].artist}
            </div>
          </div>
        </div>
        <div className="player__timers">
          <div className="player__current-time">{formatTime(currentTime)}</div>
          <div className="player__duration">
            {duration && !Number.isNaN(duration)
              ? formatTime(duration)
              : '00:00'}
          </div>
        </div>
        <input
          className="player__progress-bar"
          onChange={changeRange}
          ref={progressBarRef}
          type="range"
          defaultValue="0"
        />
      </div>
      <div className="player__container">
        <div className="player__controls">
          <div className="player__song-controls">
            <Button main onClick={() => skipSong(false)}>
              <svg
                width="30"
                height="33"
                viewBox="0 0 30 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.028 26.859L26.1082 28.044C26.5606 28.3951 27.1734 28.458 27.6876 28.2062C28.2019 27.9543 28.528 27.4317 28.528 26.859H27.028ZM27.028 5.72917H28.528C28.528 5.15653 28.2019 4.63386 27.6876 4.38202C27.1734 4.13018 26.5606 4.19312 26.1082 4.54423L27.028 5.72917ZM13.4168 16.2941L12.4971 15.1092C12.131 15.3933 11.9168 15.8307 11.9168 16.2941C11.9168 16.7575 12.131 17.1949 12.4971 17.479L13.4168 16.2941ZM28.528 26.859V5.72917H25.528V26.859H28.528ZM26.1082 4.54423L12.4971 15.1092L14.3366 17.479L27.9477 6.9141L26.1082 4.54423ZM12.4971 17.479L26.1082 28.044L27.9477 25.6741L14.3366 15.1092L12.4971 17.479ZM5.19461 27.9155V4.67268H2.19461V27.9155H5.19461Z"
                  fill="#EAF0FF"
                />
              </svg>
            </Button>
            <Button main onClick={togglePlayPause}>
              {isPlaying ? (
                <svg
                  width="39"
                  height="42"
                  viewBox="0 0 39 42"
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
                  width="27"
                  height="27"
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
            <Button main onClick={() => skipSong()}>
              <svg
                width="30"
                height="33"
                viewBox="0 0 30 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.56438 5.72918L4.48412 4.54424C4.03177 4.19312 3.41897 4.13019 2.90469 4.38203C2.39041 4.63387 2.06438 5.15654 2.06438 5.72918H3.56438ZM3.56438 26.859H2.06438C2.06438 27.4317 2.39041 27.9543 2.90469 28.2062C3.41897 28.458 4.03177 28.3951 4.48412 28.044L3.56438 26.859ZM17.1754 16.2941L18.0952 17.479C18.4612 17.1949 18.6754 16.7575 18.6754 16.2941C18.6754 15.8307 18.4612 15.3933 18.0952 15.1092L17.1754 16.2941ZM2.06438 5.72918V26.859H5.06438V5.72918H2.06438ZM4.48412 28.044L18.0952 17.479L16.2557 15.1092L2.64463 25.6741L4.48412 28.044ZM18.0952 15.1092L4.48412 4.54424L2.64463 6.91411L16.2557 17.479L18.0952 15.1092ZM25.3976 4.67268V27.9155H28.3976V4.67268H25.3976Z"
                  fill="#EAF0FF"
                />
              </svg>
            </Button>
          </div>
          <div className="player__album-controls">
            <Button main onClick={() => skipAlbum(false)}>
              {'<<<'}
            </Button>
            <Button main onClick={() => skipAlbum()}>
              {'>>>'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
