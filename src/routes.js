import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Contact from './Contact';
import Stuff from './Stuff';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="stuff" component={Stuff} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
);

export default Routes;
