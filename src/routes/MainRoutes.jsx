import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/Signin";
import Profile from "../pages/Profile";
import store from "../store"
import { Provider } from "react-redux";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          {/* <Route exact path="/signin" component={Home} /> */}
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/news-category/:category" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
