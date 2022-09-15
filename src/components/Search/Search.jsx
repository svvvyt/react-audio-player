import React, { useState } from 'react';
import Button from '../UI/Button/Button';

import './Search.scss';

export default function Search({ value, onChange }) {
  const [isActive, setIsActive] = useState(false);

  const handleCloseSearch = () => {
    setIsActive(false);
  };

  return (
    <div className="search">
      {isActive ? (
        <div className="search__field">
          <input
            placeholder="Enter song/artist/album..."
            value={value}
            onChange={onChange}
            type="text"
          />
          <Button onClick={handleCloseSearch}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.01636 0.949158L18.001 17.9338"
                stroke="#EAF0FF"
                strokeWidth="2"
              />
              <path
                d="M1.01636 17.9337L18.001 0.949148"
                stroke="#EAF0FF"
                strokeWidth="2"
              />
            </svg>
          </Button>
        </div>
      ) : (
        <Button onClick={() => setIsActive(true)}>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 19.8041L13.8571 14.6613M8.71429 17.2327C4.4538 17.2327 1 13.7789 1 9.51842C1 5.25794 4.4538 1.80414 8.71429 1.80414C12.9748 1.80414 16.4286 5.25794 16.4286 9.51842C16.4286 13.7789 12.9748 17.2327 8.71429 17.2327Z"
              stroke="#EAF0FF"
              strokeWidth="2"
            />
          </svg>
        </Button>
      )}
    </div>
  );
}
