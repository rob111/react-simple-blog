import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import ArticlesIndexContainer from './containers/ArticlesIndexContainer';
import ArticleShowContainer from './containers/ArticleShowContainer';

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={ArticlesIndexContainer} />
        <Route path='/articles/:id' component={ArticleShowContainer} />

      </Router>
    </div>
  );
}

export default App;
