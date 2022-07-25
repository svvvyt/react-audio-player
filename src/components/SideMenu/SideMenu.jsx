import React, { useState } from 'react';

import Button from '../UI/Button/Button';

import './SideMenu.scss';

export default function SideMenu() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="side-menu">
      <div className="side-menu__collapsed">
        <Button onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? (
            <svg
              width="19"
              height="19"
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
          ) : (
            <svg
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1.55798H24.0199" stroke="#EAF0FF" strokeWidth="2" />
              <path
                d="M0 10.0503L24.0198 10.0503"
                stroke="#EAF0FF"
                strokeWidth="2"
              />
            </svg>
          )}
        </Button>
      </div>
      <div className="side-menu__expanded"></div>
    </div>
  );
}
