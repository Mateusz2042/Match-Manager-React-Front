import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ListMembers from '../../../containers/members/list';
import CreateMember from '../../../containers/members/create';
import EditMember from '../../../containers/members/edit';
import DetailsMember from '../../../containers/members/details';

const MembersScenes = () => (
  <Route>
    <Fragment>
      <Route exact path="/members-list" component={ListMembers} />
      <Route exact path="/member-create" component={CreateMember} />
      <Route exact path="/member-edit/:id" component={EditMember} />
      <Route exact path="/member-details/:id" component={DetailsMember} />
    </Fragment>
  </Route>
);

export default MembersScenes;
