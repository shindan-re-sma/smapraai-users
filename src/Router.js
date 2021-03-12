import React from "react";
import { Route, Switch } from "react-router-dom";
import Assesment from "./templates/Assesment";
import ApplicationForm from "./templates/ApplicationForm";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Assesment} />
      <Route exact path="/form" component={ApplicationForm} />
    </Switch>
  );
};

export default Router;
