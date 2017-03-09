import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/landing';
import Gift from './components/gift';
import App from './App';
import './index.css';
import { Router, Route, Redirect, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Redirect from="/" to="/landing" />
    <Route path="/" component={App}>
      <Route path="landing" component={Landing}/>
      <Route path="gift" component={Gift}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
