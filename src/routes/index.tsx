import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import BookDetail from '../pages/BookDetail';
import SearchResult from '../pages/SearchResult';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/books/:book" component={BookDetail} />
    <Route path="/search/" component={SearchResult} />
  </Switch>
);

export default Routes;
