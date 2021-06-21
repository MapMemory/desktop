import './styles/fonts.scss';
import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Preview from './pages/preview.jsx'
import Map from './pages/map.jsx'
import About from './pages/about.jsx'
import Download from './pages/downolad.jsx'
import Privacy from './pages/privacy.jsx'
import Themes from './pages/themes.jsx'
import Admin from './pages/admin.jsx'

ReactDOM.render(
  <HashRouter>
    <Route path="/" exact component={Preview} />
    <Route path="/map" component={Map} />
    <Route path="/about" component={About} />
    <Route path="/download" component={Download} />
    <Route path="/privacy" component={Privacy} />
    <Route path="/themes" component={Themes} />
    <Route path="/admin" component={Admin} />
  </HashRouter>,
  document.getElementById('root')
);