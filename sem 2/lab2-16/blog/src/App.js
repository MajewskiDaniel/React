import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import IndexPage from "./pages";
import AdminPage from "./pages/admin";
import PostPage from "./pages/post";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/post/:id" component={PostPage} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
