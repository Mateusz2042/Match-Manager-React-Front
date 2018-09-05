import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeComponent from '../containers/home';
import NavBar from '../components/navbar';
import PlayersScenes from './scenes/players';
import TeamsScenes from './scenes/teams';
import MatchesScenes from './scenes/matches';

const RouterComponent = () => (
  <Router>
    <Fragment>
      <NavBar />
      <Route exact path="/" component={HomeComponent} />
      {PlayersScenes()}
      {TeamsScenes()}
      {MatchesScenes()}
    </Fragment>
  </Router>
);

export default RouterComponent;
