import React from 'react';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

import classes from './LogoutHeader.module.css';

export default function logoutHeader(props) {
  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <Card className={classes.logout_header}>
      <div>
        <div>Pozdrav, </div>
        <span>{props.username}</span>
      </div>
      <Button className={classes.logout_button} onClick={logoutHandler}>
        Odjava
      </Button>
    </Card>
  );
}
