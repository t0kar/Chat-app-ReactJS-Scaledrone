import React from 'react';

import Card from '../../UI/Card/Card';
import User from '../SideBarUser/User';

import classes from './SideBar.module.css';

export default function Sidebar(props) {
  return (
    <Card className={classes.sidebar}>
      <div>Na mreži: </div>
      <ul>
        {/* <User
          key={props.currentUser.id}
          avatar={props.currentUser.avatar}
          username={props.currentUser.username + ' (ja)'}
        /> */}
        {props.users.map((user) => (
          <User
            key={user.clientData.id}
            avatar={user.clientData.avatar}
            username={user.clientData.username}
          />
        ))}
      </ul>
    </Card>
  );
}
