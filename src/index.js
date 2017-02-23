// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import PhotoGallery from './PhotoGallery';
import PartyRoom from './PartyRoom';

ReactDOM.render((
  <App />
), document.getElementById('the-universe'));
