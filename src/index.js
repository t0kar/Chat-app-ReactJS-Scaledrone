import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

const Footer = () => (
  <footer className='footer'>
    <p>
      crafted by{' '}
      <a href='https://github.com/t0kar' target='_blank' rel='noreferrer'>
        tokar
      </a>
    </p>
  </footer>
);

ReactDOM.render(
  [<App key='1' />, <Footer key='2' />],
  document.getElementById('root')
);
