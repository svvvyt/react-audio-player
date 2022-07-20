import React, { useState, useEffect } from 'react';

import MiniPlayer from './components/MiniPlayer/MiniPlayer';

import './App.scss';

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  const [songs, getSongs] = useState([
    {
      title: 'Otherland',
      artist: 'Blind Guardian',
      imgSrc: `${process.env.PUBLIC_URL}/img/albums/otherland.jpeg`,
      source: `${process.env.PUBLIC_URL}/music/Blind_Guardian-Otherland.mp3`,
    },
    {
      title: 'The Bards Song (In The Forest)',
      artist: 'Blind Guardian',
      imgSrc: `${process.env.PUBLIC_URL}/img/albums/the-bards-song.jpg`,
      source: `${process.env.PUBLIC_URL}/music/Blind_Guardian-The_Bards_Song.mp3`,
    },
    {
      title: 'To France',
      artist: 'Blind Guardian',
      imgSrc: `${process.env.PUBLIC_URL}/img/albums/to-france.jpg`,
      source: `${process.env.PUBLIC_URL}/assets/music/Blind_Guardian-To_France.mp3`,
    },
    {
      title: 'War Of The Thrones',
      artist: 'Blind Guardian',
      imgSrc: `${process.env.PUBLIC_URL}/assets/img/albums/war-of-the-thrones.jpg`,
      source: `${process.env.PUBLIC_URL}/assets/music/Blind_Guardian-War_Of_The_Thrones.mp3`,
    },
  ]);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      }
      return currentSongIndex + 1;
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <MiniPlayer
        songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
      />
    </div>
  );
}

export default App;
