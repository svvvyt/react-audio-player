import React from 'react';

import './NotFoundPage.scss';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <p>This page does not exist!</p>
      <p>Why would you even change route directly in the first place?</p>
    </div>
  );
}
