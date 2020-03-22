import React from "react";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import {Television, Settings} from "./frames";
import {hasSourceURI} from "./config/settings";

const routerRenderer = (Component: any) => () => (hasSourceURI() ? <Component /> : <Redirect to="/settings" />);

const Layout = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={routerRenderer(Television)} />
      <Route path="/settings" component={Settings} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </Router>
);

export default Layout;
