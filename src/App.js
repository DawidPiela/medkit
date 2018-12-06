import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./components/HomePage/HomePage";
import Auth from "./containers/Auth/Auth";
import Layout from "./containers/Layout/Layout";
import Logout from "./containers/Auth/Logout/Logout";
import Dashboard from "./components/Dashboard/Dashboard";
import * as actions from "./store/actions/index";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    let routes = (
      <Switch>
        <Layout>
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Layout>
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Layout>
          <Switch>
            <Route path="/logout" component={Logout} />
            <Route path="/auth" component={Auth} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" exact component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </Layout>

      )
    }

    return (
      <div>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
