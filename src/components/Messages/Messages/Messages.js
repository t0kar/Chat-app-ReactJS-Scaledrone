import { React, useEffect, useRef } from 'react';
import Card from '../../UI/Card/Card';
import Message from '../Message/Message';

import classes from './Messages.module.css';

export default function Messages(props) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.messages]);

  return (
    <Card className={classes.messages}>
      <ul className='Messages-list'>
        {props.messages.map((message) => (
          <Message
            key={message.id}
            currentUser={props.currentUser}
            user={message.user}
            text={message.text}
            timestamp={message.timestamp}
            type={message.type}
          />
        ))}
        <li ref={messagesEndRef} />
      </ul>
    </Card>
  );
}
