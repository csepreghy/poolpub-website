// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Router, Route, browserHistory } from 'react-router';
import PhotoGallery from './PhotoGallery';
import PartyRoom from './PartyRoom';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="gallery" component={PhotoGallery} />
    <Route path="party-room" component={PartyRoom} />
  </Router>
), document.getElementById('the-universe'));
