import React from "react";
import { Route, Switch } from "react-router-dom";

import Menu from "./components/menu";
import Landing from "./components/landing";
import Omas from "./components/omaList";

const Routes: React.FC = () => (
  <div>
    <Menu />
    <Switch>
      <Route exact path="/"
        render={() => (
            <Landing />
        )}
      />
      <Route
        exact path="/omas"
        render={() => (
            <Omas />
        )}
      />
    </Switch>
  </div>
);

export default Routes;
