import React from 'react';
import { Route } from 'react-router';

import Site from './site';
import Dashboard from './dashboard';

export default [
  <Route path="/" component={Site} />,
  <Route path="/dashboard" component={Dashboard} />,
];
