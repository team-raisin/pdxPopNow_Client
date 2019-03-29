import React from 'react';
import { Route } from 'react-router-dom';
import AllArtists from '../containers/AllArtists';
import CreateArtist from '../containers/CreateArtist';
import Callback from '../containers/auth/Callback';
import { withSession } from '../containers/auth/withSession';
import ArtistByID from '../containers/ArtistByID';
import AboutUs from '../components/about/AboutUs';

export const ROUTES = {
  ArtistForm: {
    path: '/artistform',
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
  AboutUs: {
    path: '/about-us',
    Component: AboutUs,
    linkTo: () => '/about-us'
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
