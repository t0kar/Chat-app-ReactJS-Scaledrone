import React from 'react';

import classes from './User.module.css';

export default function User(props) {
  return (
    <li className={classes.user} id={props.id}>
      <img src={props.avatar} alt='avatar' />
      <div className={classes.user}>{props.username}</div>
    </li>
  );
}
