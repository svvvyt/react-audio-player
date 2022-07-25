import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Album from '../../components/Album/Album';
import MiniPlayer from '../../components/MiniPlayer/MiniPlayer';
import SideMenu from '../../components/SideMenu/SideMenu';

import 'swiper/scss';

import './MainPage.scss';

import db from '../../db.json';

export default function MainPage() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > db.songs.length - 1) {
        return 0;
      }
      return currentSongIndex + 1;
    });
  }, [currentSongIndex]);

  return (
    <>
      <div className="main-page">
        <div className="main-page__header">
          <SideMenu />
          <div className="main-page__search"></div>
        </div>
        <div className="main-page__content">
          <div className="main-page__playlist">
            <div className="main-page__playlist-title">My Playlist</div>
            <div className="main-page__playlist-content">
              <Swiper spaceBetween={100} slidesPerView={2}>
                {db.songs &&
                  db.songs.map((song, index) => (
                    <SwiperSlide>
                      <Album songs={db.songs} songIndex={index} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          <div className="main-page__playlist">
            <div className="main-page__playlist-title">My Playlist</div>
            <div className="main-page__playlist-content">
              <Swiper spaceBetween={100} slidesPerView={2}>
                {db.songs &&
                  db.songs.map((song, index) => (
                    <SwiperSlide>
                      <Album songs={db.songs} songIndex={index} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page__mini-player">
        <MiniPlayer
          songs={db.songs}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
        />
      </div>
    </>
  );
}
