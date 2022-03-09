import React, { Fragment } from 'react';

import classes from './Message.module.css';

export default function Message(props) {
  const myMessage = props.user.id === props.currentUser.id;
  const infoMessage = props.type === 'INFO_MESSAGE';

  const unixTimestamp = props.timestamp;
  const date = new Date(unixTimestamp);
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();

  const formattedTime = hours + ':' + minutes.substr(-2);

  return (
    <Fragment>
      {!infoMessage ? (
        <li
          className={`${classes.message} ${myMessage && classes.message_sent}`}
        >
          <img src={props.user.avatar} alt='avatar' />
          <div>
            <div
              className={`${classes.username} ${
                myMessage && classes.username_sent
              }`}
            >
              {props.user.username}
            </div>
            <div
              className={`${classes.text} ${myMessage && classes.text_sent}`}
            >
              {props.text}
            </div>
            <div
              className={`${classes.timestamp} ${
                myMessage && classes.timestamp_sent
              }`}
            >
              {formattedTime}
            </div>
          </div>
        </li>
      ) : (
        <div className={classes.message_info}>
          <div>{props.text}</div>
        </div>
      )}
    </Fragment>
  );
}
