import React from 'react';
import { browserHistory, Router, IndexRoute, Route, Redirect } from 'react-router';

import App from './views/app';
// import Meatball from './views/meatball';
import Spaghetti from './views/spaghetti';
import Landing from './views/Landing';
import Login from './views/Login';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/spaghetti" component={Spaghetti} />
      <Route path="/login" component={Login} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
);

export default Routes;
