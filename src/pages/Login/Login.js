import React, { useState } from 'react';
import Card from '../../components/UI/Card/Card';
import Button from '../../components/UI/Button/Button';
import Avatar from '../../components/UI/Avatar/Avatar';

import classes from './Login.module.css';
import blankAvatar from './../../media/avatar_blank.png';

export default function Login(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [avatar, setAvatar] = useState(blankAvatar);
  const [usernameIsValid, setUsernameIsValid] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0) {
      setUsernameIsValid(false);
      return;
    }
    setUsernameIsValid(true);
    props.onLogin(avatar, enteredUsername);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const addAvatarHandler = (avatar) => {
    setAvatar(avatar);
  };

  return (
    <Card
      className={
        !usernameIsValid ? `${classes.login} ${classes.invalid}` : classes.login
      }
    >
      <form onSubmit={addUserHandler}>
        <Avatar addAvatar={addAvatarHandler} />
        <input
          type='text'
          placeholder='upiši svoj nadimak'
          onChange={usernameChangeHandler}
        />
        <Button type='submit'>Započni razgovor</Button>
      </form>
    </Card>
  );
}
