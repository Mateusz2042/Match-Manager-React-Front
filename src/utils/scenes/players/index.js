import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ListPlayers from '../../../containers/players/list';
import CreatePlayer from '../../../containers/players/create';
import EditPlayer from '../../../containers/players/edit';
import DetailsPlayer from '../../../containers/players/details';

const PlayersScenes = () => (
  <Route>
    <Fragment>
      <Route exact path="/players-list" component={ListPlayers} />
      <Route exact path="/player-create" component={CreatePlayer} />
      <Route exact path="/player-edit/:id" component={EditPlayer} />
      <Route exact path="/player-details/:id" component={DetailsPlayer} />
    </Fragment>
  </Route>
);

export default PlayersScenes;
