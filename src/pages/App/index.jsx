import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loadable from './Loadable';

const AsyncHome = Loadable({ loader: () => import('pages/Home') });
const AsyncAbout = Loadable({ loader: () => import('pages/About') });
const AsyncTopics = Loadable({ loader: () => import('pages/Topics') });
const AsyncTopic = Loadable({ loader: () => import('pages/Topic') });

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={AsyncHome} />
      <Route path="/about" component={AsyncAbout} />

      <Route exact path="/topics" component={AsyncTopics} />
      <Route path="/topics/:topicId" component={AsyncTopic} />

      <Route render={() => <div>404 page</div>} />
    </Switch>
  </Router>
);

export default App;
