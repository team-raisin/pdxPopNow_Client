import React from 'react';
import { getRoutes } from '../../routes/routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          {getRoutes()}
        </Switch>
      </Router>
    </>
  );
}



