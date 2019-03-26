import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { getRoutes } from '../../routes/routes';
import AllArtists from '../../containers/AllArtists';
// import { login } from '../../services/auth';
import Callback from '../../containers/auth/Callback';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/callback" component={Callback} />
        <Route path="/" component={AllArtists} />
      </Switch>
    </Router>
  );
}
