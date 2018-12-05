import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Auth from './containers/Auth/Auth';
import Layout from './containers/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
