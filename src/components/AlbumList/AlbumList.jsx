import React from 'react';
import { useNavigate } from 'react-router-dom';

import './AlbumList.scss';

export default function AlbumList({ items }) {
  const navigate = useNavigate();

  return (
    <div className="album-list">
      {items.map((item) => (
        <div
          className="album"
          onClick={() => navigate(`/album/${item.artist}/${item.albumTitle}`)}
          key={item.id}
        >
          <div className="album__logo">
            <img
              className="album__foreground-img"
              src={item.albumImg}
              alt="album logo"
            />
            <img
              className="album__background-img"
              src={item.albumImg}
              alt="album logo"
            />
          </div>
          <div className="album__credits">
            <div className="album__name">{item.albumTitle}</div>
            <div className="album__artist">{item.artist}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
