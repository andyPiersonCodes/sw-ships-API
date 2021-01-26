/* eslint-disable function-paren-newline */
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AffiliationPage from './pages/Afilliations'
import ClassesPage from './pages/Classes'
import ErrorPage from './pages/Error'
import HomePage from './pages/Home'
import IdsPage from './pages/Ids'
import SearchPage from './pages/Search'
import ShipsPage from './pages/Ships'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/affiliations" component={AffiliationPage} />
      <Route path="/classes" component={ClassesPage} />
      <Route path="/ids" component={IdsPage} />
      <Route path="/search" component={SearchPage} />
      <route path="/ships" component={ShipsPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'))
