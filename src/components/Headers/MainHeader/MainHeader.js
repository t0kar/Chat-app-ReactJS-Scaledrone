import React from 'react';

import Card from '../../UI/Card/Card';

import classes from './MainHeader.module.css';
import logo from './../../../media/logo.png';

export default function MainHeader() {
  return (
    <Card className={classes.header}>
      <h1>pričajmo.</h1>
      <img src={logo} alt='logo' />
    </Card>
  );
}
