import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import {
  HOME as HOME_URL,
} from './constants';

export default () => (
  <Switch>
    <Route 
      exact
      path={HOME_URL}
      component={Home}
    />
  </Switch>
);