import React from "react";
import { Route, Switch } from "react-router-dom";
import Carer from "./components/carerList";
import CarerDetails from "./components/carerDetails";
import Splash from "./components/splash";
import Choice from "./components/choice";
import ChoiceReceive from "./components/choiceNeedHelp";

const Routes: React.FC = () => (
  <div>
    <Switch>
      <Route exact path="/"
        render={() => (
            <Choice />
        )}
      />
      <Route
        exact path="/carers/:id"
        render={() => (
            <Carer />
        )}
      />
      <Route
        exact path="/carers"
        render={() => (
            <Carer />
        )}
      />
      <Route
        exact path="/requests/:id"
        render={() => (
            <Carer />
        )}
      />
      <Route
        exact path="/requests"
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
      <Route
        exact path="/give"
        render={() => (
            <ChoiceReceive />
        )}
      />
      <Route
        exact path="/receive"
        render={() => (
            <ChoiceReceive />
        )}
      />
      <Route
        exact path="/receive/new"
        render={() => (
            <ChoiceReceive />
        )}
      />
      <Route
        exact path="/receive/list"
        render={() => (
            <ChoiceReceive />
        )}
      />
    </Switch>
  </div>
);

export default Routes;
