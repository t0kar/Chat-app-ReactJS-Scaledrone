// MessageInput + Messages

import React, { useState, useEffect } from 'react';

import Messages from '../../components/Messages/Messages/Messages';
import MessageInput from '../../components/Messages/MessageInput/MessageInput';
import Sidebar from '../../components/SideBar/Sidebar/SideBar';

import classes from './Chat.module.css';

export default function Chat(props) {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [roomConnection, setRoomConnection] = useState(false);

  useEffect(() => {
    if (props.currentUser) {
      roomConnect(props.drone);
    }
  }, [props.currentUser, props.drone]);

  const roomConnect = (drone) => {
    const room = drone.subscribe('observable-room');

    room.on('open', (error) => {
      if (error) {
        setRoomConnection(false);
        return console.error(error);
      }
      setRoomConnection(true);
      console.log('Connected to room!');
    });

    room.on('members', function (members) {
      setUsers([...members]);
    });

    room.on('member_join', function (member) {
      setUsers((prevUsers) => {
        return [...prevUsers, member];
      });

      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            user: {
              id: member.clientData.id,
              username: member.clientData.username,
              avatar: member.clientData.avatar,
            },
            text: `Korisnik ${member.clientData.username} se priključio razgovoru`,
            id: member.clientData.id,
            type: 'INFO_MESSAGE',
          },
        ];
      });

      console.log(
        'Korisnik',
        member.clientData.username,
        'se uključio u razgovor.'
      );
    });

    room.on('member_leave', function (member) {
      setUsers((prevUsers) => {
        return prevUsers.filter((user) => user.id !== member.id);
      });

      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            user: {
              id: member.clientData.id,
              username: member.clientData.username,
              avatar: member.clientData.avatar,
            },
            text: `Korisnik ${member.clientData.username} je napustio razgovor`,
            id: member.clientData.id,
            type: 'INFO_MESSAGE',
          },
        ];
      });
      console.log(
        'Korisnik',
        member.clientData.username,
        'je izašao iz razgovora.'
      );
    });

    room.on('data', (data, member) => {
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            user: {
              id: member.clientData.id,
              username: member.clientData.username,
              avatar: member.clientData.avatar,
            },
            text: data.text,
            timestamp: data.timestamp,
            id: data.timestamp,
            type: 'USER_MESSAGE',
          },
        ];
      });
    });
  };

  const onSendMessage = (text) => {
    roomConnection &&
      props.drone.publish({
        room: 'observable-room',
        message: {
          text: text,
          timestamp: Date.now(),
        },
      });
    console.log('Message sent!');
  };

  return (
    <div className={classes.chat}>
      <Sidebar users={users} currentUser={props.currentUser} />
      <div className={classes.messages}>
        <Messages messages={messages} currentUser={props.currentUser} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}
