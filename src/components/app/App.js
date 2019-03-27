import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { getRoutes } from '../../routes/routes';
import AllArtists from '../../containers/AllArtists';
// import ArtistForm from '../../components/form/ArtistForm';
import ArtistByID from '../../containers/ArtistByID';
// import { login } from '../../services/auth';
import Callback from '../../containers/auth/Callback';
// import { withSession } from '../../containers/auth/withSession';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/callback" component={Callback} />
        <Route path="/artist/:id" component={ArtistByID} />
        <Route path="/" component={AllArtists} />
      </Switch>
    </Router>
  );
}
