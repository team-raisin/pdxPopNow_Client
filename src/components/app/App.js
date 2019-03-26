import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { getRoutes } from '../../routes/routes';
import AllArtists from '../../containers/AllArtists';

export default function App() {
  return (
    <AllArtists/>
  );
}
