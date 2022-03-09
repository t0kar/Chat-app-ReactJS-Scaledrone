import React, { useState, Fragment } from 'react';
import Chat from './pages/Chat/Chat';
import Login from './pages/Login/Login';
import MainHeader from './components/Headers/MainHeader/MainHeader';
import LogoutHeader from './components/Headers/LogoutHeader/LogoutHeader';

function App() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Replace with your Scaladrone channel ID
  const myChannelID = 'ATGMRxMwUSnwYIEd';

  const drone = new window.Scaledrone(myChannelID, {
    data: user,
  });

  drone.on('open', (error) => {
    if (error) {
      return console.error(error);
    }
  });

  const loginHandler = (avatar, username) => {
    setUser(() => {
      return { id: drone.clientId, avatar: avatar, username: username };
    });
    setIsLoggedIn(true);
    console.log('User', username, 'connected!');
  };

  const logoutHandler = () => {
    drone.close();
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      <header>
        <MainHeader />
        {isLoggedIn && (
          <LogoutHeader
            username={user.username}
            onLogout={logoutHandler}
          ></LogoutHeader>
        )}
      </header>

      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && (
          <Chat drone={drone} currentUser={user} onLogout={logoutHandler} />
        )}
      </main>
    </Fragment>
  );
}

export default App;
