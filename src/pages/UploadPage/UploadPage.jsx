import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import './UploadPage.scss';

export default function UploadPage() {
  const navigate = useNavigate();

  return (
    <div className="upload-page">
      <div className="upload-page__header">
        <Button onClick={() => navigate('/')}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.19613 12.7894L9.59613 6.38937M3.19613 12.7894L9.59613 19.1894M3.19613 12.7894H23.1961"
              stroke="#EAF0FF"
              strokeWidth="2"
            />
          </svg>
        </Button>
        <div className="upload-page__title">Upload Page</div>
      </div>
    </div>
  );
}
