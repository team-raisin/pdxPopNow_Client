import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { getRoutes } from '../../routes/routes';

export default function App() {
  return (
    <Router>
      <Switch>
        {getRoutes()}
      </Switch>
    </Router>
  );
}
