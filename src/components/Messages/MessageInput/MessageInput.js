import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

import classes from './MessageInput.module.css';

export default function MessageInput(props) {
  const [enteredMessage, setEnteredMessage] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const sendMessageHandler = (event) => {
    event.preventDefault();

    if (enteredMessage.trim().length === 0) {
      return;
    }
    props.onSendMessage(enteredMessage);
    setFormIsValid(false);
    setEnteredMessage('');
  };

  const messageChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setFormIsValid(true);
    } else setFormIsValid(false);
    setEnteredMessage(event.target.value);
  };

  return (
    <Card className={classes.message_input}>
      <form onSubmit={sendMessageHandler}>
        <input
          type='text'
          placeholder='Napiši poruku...'
          value={enteredMessage}
          onChange={messageChangeHandler}
          autoFocus
        />
        <Button
          className={classes.button}
          type='submit'
          disabled={!formIsValid}
        >
          Pošalji
        </Button>
      </form>
    </Card>
  );
}
