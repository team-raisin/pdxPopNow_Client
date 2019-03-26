import React from 'react';
import { Route } from 'react-router-dom';
import AllArtists from '../containers/AllArtists';
import Form from '../components/form/Form';

export const ROUTES = {
  Artist: {
    path: '/artists',
    Component: AllArtists,
    linkTo: () => '/artists'
  },

  Form: {
    path: '/form',
    Component: Form,
    linkTo: () => '/form'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} exact path={route.path} component={route.Component} />;
  });
};
