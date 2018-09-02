import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ListMatches from '../../../containers/matches/list';
import CreateMatch from '../../../containers/matches/create';
import EditMatch from '../../../containers/matches/edit';
import DetailsMatch from '../../../containers/matches/details';

const MatchesScenes = () => (
  <Route>
    <Fragment>
      <Route exact path="/matches-list" component={ListMatches} />
      <Route exact path="/match-create" component={CreateMatch} />
      <Route exact path="/match-edit/:id" component={EditMatch} />
      <Route exact path="/match-details/:id" component={DetailsMatch} />
    </Fragment>
  </Route>
);

export default MatchesScenes;
