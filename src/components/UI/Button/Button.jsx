import classNames from 'classnames';
import React from 'react';

import './Button.scss';

export default function Button({ children, onClick, mini, main }) {
  return (
    <button onClick={onClick} className={classNames('button', {
      'button__mini': mini,
      'button__main': main,
    })}>
      {children}
    </button>
  );
}
