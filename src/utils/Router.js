import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeComponent from '../containers/home';
import NavBar from '../components/navbar';
import MembersScenes from './scenes/members';
import MatchesScenes from './scenes/matches';

const RouterComponent = () => (
  <Router>
    <Fragment>
      <NavBar />
      <Route exact path="/" component={HomeComponent} />
      {MembersScenes()}
      {MatchesScenes()}
    </Fragment>
  </Router>
);

export default RouterComponent;
