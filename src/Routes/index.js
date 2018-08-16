import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import Message from 'components/Message';
import {
  HOME as HOME_URL,
  MESSAGE as MESSAGE_URL,
} from './constants';

export default () => (
  <Switch>
    <Route 
      exact
      path={MESSAGE_URL}
      component={Message}
    />
    <Route 
      exact
      path={HOME_URL}
      component={Home}
    />
  </Switch>
);