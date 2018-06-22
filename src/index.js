import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import Countdown from './components/Countdown';
import Flipcoin from './components/Flipcoin';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Countdown} />
        <Route path="/flipcoin" component={Flipcoin} />
      </Route>
    </Router>
  , document.getElementById('root'));
registerServiceWorker();
