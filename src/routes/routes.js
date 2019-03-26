import React from 'react';
import { Route } from 'react-router-dom';
import AllArtists from '../containers/AllArtists';
import CreateArtist from '../containers/CreateArtist';

export const ROUTES = {
  Artist: {
    path: '/artists',
    Component: AllArtists,
    linkTo: () => '/artists'
  },
  ArtistForm: {
    path: '/artistform',
    Component: CreateArtist,
    linkTo: () => '/artistsform'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};
