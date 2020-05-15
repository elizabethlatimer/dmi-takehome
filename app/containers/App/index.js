/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Home/Loadable';
import Nav from '../../components/Nav';
import AddQuoteForm from '../AddQuoteForm';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={AddQuoteForm} />
        <Redirect to="/" />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
