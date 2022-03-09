import React from 'react';

import Card from '../../UI/Card/Card';

import classes from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <Card className={classes.header}>
      <h1>pričajmo.</h1>
      <h1>〶</h1>
    </Card>
  );
}
