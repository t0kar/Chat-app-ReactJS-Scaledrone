import React from 'react';

import classes from './Button.module.css';

export default function Button(props) {
  return (
    <button
      className={props.className || classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
