import React from "react";
import { Route, Switch } from "react-router-dom";

import Menu from "./components/menu";
import Landing from "./components/landing";
import Omas from "./components/omaList";
import Carer from "./components/carerList";
import OmaDetails from "./components/omaDetails";
import CarerDetails from "./components/carerDetails";
import Splash from "./components/splash";

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
            <Carer />
        )}
      />
      <Route
        exact path="/omas/:id"
        render={(id) => (
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
      <Route
        exact path="/splash"
        render={() => (
            <Splash />
        )}
      />
    </Switch>
  </div>
);

export default Routes;
