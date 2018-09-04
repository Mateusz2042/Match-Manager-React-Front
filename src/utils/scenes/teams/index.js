import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ListTeams from '../../../containers/teams/list';
import CreateTeam from '../../../containers/teams/create';
import EditTeam from '../../../containers/teams/edit';
import DetailsTeam from '../../../containers/teams/details';

const TeamsScenes = () => (
  <Route>
    <Fragment>
      <Route exact path="/teams-list" component={ListTeams} />
      <Route exact path="/team-create" component={CreateTeam} />
      <Route exact path="/team-edit/:id" component={EditTeam} />
      <Route exact path="/team-details/:id" component={DetailsTeam} />
    </Fragment>
  </Route>
);

export default TeamsScenes;
