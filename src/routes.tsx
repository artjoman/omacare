import React from "react";
import { Route, Switch } from "react-router-dom";

import Menu from "./components/menu";
import Landing from "./components/landing";
import Omas from "./components/omaList";
import Carer from "./components/carerList";

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
        exact path="/carers/:id"
        render={() => (
            <Omas />
        )}
      />
      <Route
        exact path="/omas/:id"
        render={() => (
            <Omas />
        )}
      />
      <Route
        exact path="/omas"
        render={() => (
            <Omas />
        )}
      />
      <Route
        exact path="/carers"
        render={() => (
            <Carer />
        )}
      />
    </Switch>
  </div>
);

export default Routes;
