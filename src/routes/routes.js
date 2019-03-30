import React from 'react';
import { Route } from 'react-router-dom';
import AllArtists from '../containers/AllArtists';
import CreateArtist from '../containers/CreateArtist';
import Callback from '../containers/auth/Callback';
import { withSession } from '../containers/auth/withSession';
import ArtistByID from '../containers/ArtistByID';

export const ROUTES = {
  ArtistForm: {
    path: '/artistform',
    // you require auth to create an artist here
    // but the back-end does not require auth
    // to create an artist?
    Component: withSession(CreateArtist),
    linkTo: () => '/artistform'
  },

  Artist: {
    path: '/',
    Component: AllArtists,
    linkTo: () => '/'
  },
  CALLBACK: {
    path: '/callback',
    Component: Callback,
    linkTo: () => '/callback'
  },
  ArtistByID: {
    path: '/:id',
    Component: ArtistByID,
    linkTo: () => '/:id'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};
