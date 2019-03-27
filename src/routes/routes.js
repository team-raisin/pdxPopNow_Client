import React from 'react';
import { Route } from 'react-router-dom';
import AllArtists from '../containers/AllArtists';
import CreateArtist from '../containers/CreateArtist';
import Callback from '../containers/auth/Callback';
import { withSession } from '../containers/auth/withSession';

export const ROUTES = {
  ArtistForm: {
    path: '/artistform',
    Component: withSession(CreateArtist),
    linkTo: () => '/artistform'
  },

  Artist: {
    path: '/artists',
    Component: AllArtists,
    linkTo: () => '/artists'
  },
  
  CALLBACK: {
    path: '/callback',
    Component: Callback,
    linkTo: () => '/callback'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};
