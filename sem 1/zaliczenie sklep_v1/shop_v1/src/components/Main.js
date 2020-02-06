import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import CatalogPage from "./CatalogPage";
import AboutPage from "./AboutPage";
import ErrorPage from "./ErrorPage";

const Main = () => (
  <Switch>
    <Route path="/" exact={true} component={HomePage} />
    <Route path="/catalog" component={CatalogPage} />
    <Route path="/about" component={AboutPage} />
    <Route component={ErrorPage} />
  </Switch>
);

export default Main;
